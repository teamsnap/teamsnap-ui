import * as React from 'react';
import { Button } from '../Button';
import { CheckboxStates } from '../../types';
import { Panel } from '../Panel';
import { PanelHeader } from '../PanelHeader';
import { PanelBody } from '../PanelBody';
import { PanelRow } from '../PanelRow';
import { Field } from '../Field';
import { ListToggle } from '../ListToggle';
import { getClassName } from '../../utils/helpers';

interface ExpandableList {
  heading: string;
  subheading: string;
  tags: React.ReactNode[];
  rows: string[];
}

type Props = {
  className?: string;
  mods?: string;
  list: ExpandableList[];
  label: string;
  activeRows: string[];
  headerStatus: object;
  setActiveRows: React.Dispatch<React.SetStateAction<{}>>;
  setHeaderStatus: React.Dispatch<React.SetStateAction<{}>>;
};

const ToggleCheckboxList: React.FunctionComponent<Props> = ({
  className,
  mods,
  label,
  list,
  activeRows,
  headerStatus,
  setActiveRows,
  setHeaderStatus,
}: Props) => {
  // Dynamically create refs outside of the mapping below for performance reasons
  const bodyRefs = React.useRef([]);
  bodyRefs.current = list.map(
    (_, i) => bodyRefs.current[i] ?? React.createRef()
  );

  const getFullChildCount = (list: any) => {
    return list.reduce((acc, curr) => acc + curr.rows.length, 0);
  };

  const toggleAllRows = () => {
    let headers;
    let divisions: string[];
    let currHeaderStatus;

    if (
      activeRows.length === 0 ||
      (activeRows.length > 0 && activeRows.length < getFullChildCount(list))
    ) {
      divisions = list
        .map((row) => {
          const { heading, subheading, rows } = row;
          const headerName = `${heading}-${subheading}`;

          headers = {
            ...headers,
            [headerName]: {
              activeCount: rows.length,
              status: true,
            },
          };

          currHeaderStatus = {
            ...headerStatus,
            ...headers,
          };

          return rows.map((division) => `${heading}-${subheading}-${division}`);
        })
        .reduce((curr, next) => [...curr, ...next], []);
    } else {
      divisions = [];
      currHeaderStatus = {};
    }

    setActiveRows(divisions);
    setHeaderStatus(currHeaderStatus);
  };

  const toggleSubheadingRows = (
    heading: string,
    subheading: string,
    idx: number
  ) => {
    let rowData = [];
    const headerName = `${heading}-${subheading}`;

    if (
      headerName in headerStatus &&
      headerStatus[headerName]['activeCount'] >= 0
    ) {
      // Remove rows which are associated with the header's naming convention
      rowData = activeRows.filter((row) => !row.includes(headerName));

      // Remove or filter out the header we do not want to keep
      const newObject = Object.keys(headerStatus)
        .filter((item) => item != headerName)
        .reduce((res, key) => ((res[key] = headerStatus[key]), res), {});

      setHeaderStatus(newObject);
    } else {
      const productChildElements = getChildren(idx);

      const rows = [...productChildElements].map(
        (division) => `${headerName}-${division.innerText}`
      );

      rowData = [...activeRows, ...rows];

      setHeaderStatus({
        ...headerStatus,
        [headerName]: {
          activeCount: rows.length,
          status: CheckboxStates.TRUE,
        },
      });
    }

    setActiveRows(rowData);
  };

  const getChildren = (idx: number) =>
    bodyRefs.current[idx].current &&
    bodyRefs.current[idx].current.children[0].childNodes;

  const onRowClick = (
    heading: string,
    subheading: string,
    division: string,
    parentIdx: number
  ) => {
    let newActiveList = [];
    let activeCount = 0;
    let newStatus = CheckboxStates.FALSE;
    const children = getChildren(parentIdx);
    const headerName = `${heading}-${subheading}`;

    // Row already exists, unselect it
    if (activeRows.includes(division)) {
      newActiveList = activeRows.filter((item) => item != division);

      activeCount = headerStatus[headerName]
        ? headerStatus[headerName]['activeCount'] - 1
        : headerStatus[headerName]['activeCount'];

      if (activeCount > 0 && activeCount < children.length) {
        newStatus = CheckboxStates.INDETERMINATE;
      }
    } else {
      // Row doesn't exists, select it
      activeCount = headerStatus[headerName]
        ? headerStatus[headerName]['activeCount'] + 1
        : 1;

      if (activeCount === children.length) {
        newStatus = CheckboxStates.TRUE;
      } else {
        newStatus = CheckboxStates.INDETERMINATE;
      }

      newActiveList = [...activeRows, division];
    }

    const itemActiveStatus = {
      ...headerStatus,
      [headerName]: {
        activeCount: activeCount,
        status: newStatus,
      },
    };

    setHeaderStatus(itemActiveStatus);
    setActiveRows(newActiveList);
  };

  const buildRows = (
    heading: string,
    subheading: string,
    rows: string[],
    parentIdx: number
  ) => {
    return rows.map((division) => {
      const uniqueId = `${heading}-${subheading}-${division}`;
      const classes = activeRows.includes(uniqueId)
        ? `u-flex u-flexRow u-flexJustifyBetween Panel-row--active ${mods}`
        : `u-flex u-flexRow u-flexJustifyBetween ${mods}`;

      return (
        <PanelRow key={uniqueId} mods={classes}>
          <p className="u-padLeftLg">{division}</p>

          <Field
            isDisabled={false}
            name={uniqueId}
            type="checkbox"
            formFieldProps={{
              checked: activeRows.includes(uniqueId),
              onClick: () => {
                onRowClick(heading, subheading, uniqueId, parentIdx);
              },
            }}
          />
        </PanelRow>
      );
    });
  };

  const buildList = () => {
    return list.map((item, idx) => {
      const { heading, subheading, tags, rows } = item;

      let selected;
      const headerName = `${heading}-${subheading}`;

      if (headerStatus[headerName]) {
        selected =
          headerStatus[headerName]['activeCount'] == getChildren(idx).length
            ? 'Panel-header--active'
            : '';
      }

      const classes = getClassName(
        'Panel-header--list u-flexJustifyBetween u-padTopLg',
        mods,
        selected
      );

      return (
        <React.Fragment key={`${headerName}`}>
          <PanelHeader mods={classes}>
            <div>
              {rows && rows.length > 0 && (
                <ListToggle
                  onClick={() => {
                    bodyRefs.current[idx].current.classList &&
                      bodyRefs.current[idx].current.classList.toggle(
                        'Panel-body--closed'
                      );
                    bodyRefs.current[idx].current.classList.toggle(
                      'Panel-body--open'
                    );
                  }}
                />
              )}
              <strong className="u-padSidesSm">{heading}</strong>

              {tags.map((c) => c)}
            </div>

            <div>
              <Field
                isDisabled={false}
                name={headerName}
                type="checkbox"
                formFieldProps={{
                  checked:
                    headerStatus[headerName] &&
                    headerStatus[headerName]['status'],
                  onClick: () => toggleSubheadingRows(heading, subheading, idx),
                }}
              />
            </div>
          </PanelHeader>

          <div
            ref={bodyRefs.current[idx]}
            className="Panel-body-wrapper Panel-body--closed"
          >
            <PanelBody>{buildRows(heading, subheading, rows, idx)}</PanelBody>
          </div>
        </React.Fragment>
      );
    });
  };

  const buttonLabel =
    activeRows.length === getFullChildCount(list) ? 'Clear All' : 'Select All';

  return (
    <>
      <div className="Grid-cell u-flex u-flexJustifyBetween u-spaceEndsLg u-flexAlignItemsCenter">
        <h4>{label}</h4>
        <Button
          label={buttonLabel}
          mods="u-padSidesLg"
          isActive={activeRows.length === getFullChildCount(list)}
          onClick={() => toggleAllRows()}
        />
      </div>

      <div className="Grid-cell">
        {list.length === 0 ? (
          <p className="u-flex u-flexJustifyCenter u-padEndsMd">
            You have no recipients
          </p>
        ) : (
          <Panel mods={className}>{buildList()}</Panel>
        )}
      </div>
    </>
  );
};

export default ToggleCheckboxList;
