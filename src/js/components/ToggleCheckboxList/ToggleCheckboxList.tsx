import * as React from 'react';
import { Button } from '../Button';
import { CheckboxStates } from '../../types';
import { Panel } from '../Panel';
import { PanelHeader } from '../PanelHeader';
import { PanelBody } from '../PanelBody';
import { PanelRow } from '../PanelRow';
import { Tag } from '../Tag';
import { Field } from '../Field';
import { ListToggle } from '../ListToggle';
import { getClassName } from '../../utils/helpers';

interface ExpandableList {
  heading: string;
  subheading: string;
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
  setHeaderStatus
}: Props) => {
  // Dynamically create refs outside of the mapping below for performance reasons
  const bodyRefs = React.useRef([]);
  bodyRefs.current = list.map((_, i) => bodyRefs.current[i] ?? React.createRef());

  const selectAllRows = () => {
    let headers;

    const divisions = list.map(row => {
      const { heading, rows } = row;

      headers = {
        ...headers,
        [heading]: {
          activeCount: rows.length,
          status: true
        }
      }

      return rows.map(division => `${heading}-${division}`)
    })
    .reduce((curr, next) => [...curr, ...next], []);

    setActiveRows(divisions);
    setHeaderStatus({
      ...headerStatus,
      ...headers
    });
  }

  const toggleAllRows = (heading: string, idx: number) => {
    let rowData= [];

    if (heading in headerStatus && headerStatus[heading]['activeCount'] > 0) {
      // Remove rows which are associated with the header's naming convention
      rowData = activeRows.filter(row => !row.includes(heading))

      // Remove or filter out the header we do not want to keep
      const newObject = Object.keys(headerStatus)
        .filter(item => item != heading)
        .reduce((res, key) => (res[key] = headerStatus[key], res), {});

      setHeaderStatus(newObject);
    } else {
      const productChildElements = getChildren(idx);

      const rows = [...productChildElements].map(division => `${heading}-${division.innerText}`);

      rowData = [
        ...activeRows,
        ...rows
      ];

      setHeaderStatus({
        ...headerStatus,
        [heading]: {
          activeCount: rows.length,
          status: CheckboxStates.TRUE
        }
      });
    }

    setActiveRows(rowData);
  }

  const getChildren = (idx: number) => bodyRefs.current[idx].current &&
    bodyRefs.current[idx].current.children[0].childNodes;

  const onRowClick = (heading: string, division: string, parentIdx: number) => {
    let newActiveList = [];
    let activeCount = 0;
    let newStatus = CheckboxStates.FALSE;
    const children = getChildren(parentIdx);

    // Row already exists, unselect it
    if (activeRows.includes(division)) {
      newActiveList = activeRows.filter(item => item != division);

      activeCount = headerStatus[heading] ?
        headerStatus[heading]['activeCount'] - 1 :
        headerStatus[heading]['activeCount'];

      if (activeCount > 0 && activeCount < children.length) {
        newStatus = CheckboxStates.INDETERMINATE;
      }
    } else { // Row doesn't exists, select it
      activeCount = headerStatus[heading] ? headerStatus[heading]['activeCount'] + 1 : 1;

      if (activeCount === children.length) {
        newStatus = CheckboxStates.TRUE;
      } else {
        newStatus = CheckboxStates.INDETERMINATE;
      }

      newActiveList = [
        ...activeRows,
        division
      ];
    }

    const itemActiveStatus = {
      ...headerStatus,
      [heading]: {
        activeCount: activeCount,
        status: newStatus
      }
    };

    setHeaderStatus(itemActiveStatus);
    setActiveRows(newActiveList);
  }

  const buildRows = (heading: string, rows: string[], parentIdx: number)  => {
    return rows.map(division => {
      const uniqueId = `${heading}-${division}`;
      const classes = activeRows.includes(uniqueId) ?
        `u-flex u-flexRow u-flexJustifyBetween Panel-row--active ${mods}` :
        `u-flex u-flexRow u-flexJustifyBetween ${mods}`;

      return (
        <PanelRow key={ uniqueId } mods={ classes }>
          <p className="u-padLeftLg">{ division }</p>

          <Field
            isDisabled={ false }
            name={ uniqueId }
            type='checkbox'
            formFieldProps={{
              checked: activeRows.includes(uniqueId),
              onClick: () => { onRowClick(heading, uniqueId, parentIdx) }
            }}
          />
        </PanelRow>
      );
    });
  }

  const buildList = () => {
    return list.map((item, idx) => {
      const {
        heading,
        subheading,
        rows
      } = item;

      let selected;

      if (headerStatus[heading]) {
        selected = headerStatus[heading]['activeCount'] == getChildren(idx).length ? 'Panel-header--active' : '';
      }

      const classes = getClassName(
        'Panel-header--list u-flexJustifyBetween u-padTopLg',
        mods,
        selected
      );


      return (
        <React.Fragment key={ heading }>
          <PanelHeader mods={ classes }>
            <div>
              <ListToggle
                onClick={() => {
                  bodyRefs.current[idx].current.classList &&
                  bodyRefs.current[idx].current.classList.toggle('Panel-body--closed');
                  bodyRefs.current[idx].current.classList.toggle('Panel-body--open');
                }}
              />
              <strong className='u-padSidesSm'>{ heading }</strong>
              <Tag text={ subheading } />
            </div>

            <div>
              <Field
                isDisabled={ false }
                name={ heading }
                type='checkbox'
                formFieldProps={{
                  checked: headerStatus[heading] && headerStatus[heading]['status'],
                  onClick: () => toggleAllRows(heading, idx)
                }}
              />
            </div>
          </PanelHeader>

          <div
            ref={ bodyRefs.current[idx] }
            className="Panel-body-wrapper Panel-body--closed"
          >
            <PanelBody>
              { buildRows(heading, rows, idx) }
            </PanelBody>
          </div>
        </React.Fragment>
      );
    })
  }

  return (
    <>
      <div className="Grid-cell u-flex u-flexJustifyBetween u-spaceEndsLg u-flexAlignItemsCenter">
        <h4>{ label }</h4>
        <Button
          label="Select All"
          mods="u-padSidesLg"
          onClick={ () => selectAllRows() }
        />
      </div>

      <div className="Grid-cell">
        {
          list.length === 0 ?
            <p className="u-flex u-flexJustifyCenter u-padEndsMd">You have no recipients</p> :
            <Panel mods={ className }>
              {buildList()}
            </Panel>
        }
      </div>
    </>
  );
}

export default ToggleCheckboxList;
