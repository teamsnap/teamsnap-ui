import React, { createRef, FunctionComponent, useState } from 'react';
import { CheckboxStates } from '../../types';
import { Panel } from '../Panel';
import { PanelHeader } from '../PanelHeader';
import { PanelBody } from '../PanelBody';
import { PanelRow } from '../PanelRow';
import { Tag } from '../Tag';
import { Field } from '../Field';
import { ListToggle } from '../ListToggle';

interface Program {
  heading: string;
  subheading: string;
  rows: string[];
}

type Props = {
  list: Program[]
};

const ToggleCheckboxList:FunctionComponent<Props> = ({ list }: Props) => {
  const [activeRows, setActiveRows] = useState([]);
  const [headerStatus, setHeaderStatus] = useState({});

  // Dynamically create refs outside of the mapping below for performance reasons
  const bodyRefs = React.useRef([]);
  bodyRefs.current = list.map((_, i) => bodyRefs.current[i] ?? createRef());

  const toggleAllRows = (heading: string, idx: number) => {
    let rowData= [];

    if (heading in headerStatus && headerStatus[heading]['activeCount'] > 0) {
      const { status } = headerStatus[heading];

      // Remove rows which are associated with the header's naming convention
      rowData = activeRows.filter(row => !row.includes(heading))

      // Remove or filter out the header we do not want to keep
      const newObject = Object.keys(headerStatus)
        .filter(item => item != heading)
        .reduce((res, key) => (res[key] = headerStatus[key], res), {});

      setHeaderStatus(newObject);
    } else {
      const productChildElements = getChildren(idx);

      const rows = [...productChildElements].map((division, index) => {
        return `${heading}-${division.innerText}-${index}`
      });

      rowData = [
        ...activeRows,
        ...rows
      ];

      setHeaderStatus({
        ...headerStatus,
        [heading]: {
          'activeCount': rows.length,
          'status': CheckboxStates.TRUE
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

    const programActiveStatus = {
      ...headerStatus,
      [heading]: {
        'activeCount': activeCount,
        'status': newStatus
      }
    };

    setHeaderStatus(programActiveStatus);
    setActiveRows(newActiveList);
  }

  const buildRows = (heading: string, rows: string[], parentIdx: number)  => {
    return rows.map((division, idx) => {
      const uniqueId = `${heading}-${division}-${idx}`;
      const mods = activeRows.includes(uniqueId) ?
        'u-flex u-flexRow u-flexJustifyBetween Panel-row--active' :
        'u-flex u-flexRow u-flexJustifyBetween';

      return (
        <PanelRow key={ uniqueId } mods={ mods }>
          <p className="u-padLeftLg">{ division }</p>

          <Field
            isDisabled={ false }
            name='Sample'
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
    return list.map((program, idx) => {
      const {
        heading,
        subheading,
        rows
      } = program;

      return (
        <>
          <PanelHeader key={ heading } mods='Panel-header--list u-flexJustifyBetween u-padTopLg'>
            <div>
              <ListToggle
                onClick={() => {
                  bodyRefs.current[idx].current.classList &&
                  bodyRefs.current[idx].current.classList.toggle('Panel-body--closed');
                }}
              />
              <strong className='u-padSidesSm'>{ heading }</strong>
              <Tag text={ subheading } />
            </div>

            <div>
              <Field
                isDisabled={ false }
                name='Sample'
                type='checkbox'
                formFieldProps={{
                  checked: headerStatus[heading] && headerStatus[heading]['status'],
                  onClick: () => toggleAllRows(heading, idx)
                }}
              />
            </div>
          </PanelHeader>

          <div
            ref={bodyRefs.current[idx]}
            className="Panel-body-wrapper"
          >
            <PanelBody key={ subheading }>
              { buildRows(heading, rows, idx) }
            </PanelBody>
          </div>
        </>
      );
    })
  }

  return (
    <Panel>
      { buildList() }
    </Panel>
  );
}

export default ToggleCheckboxList;
