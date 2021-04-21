import React, { createRef, FunctionComponent, useState } from 'react';
import { Panel } from '../Panel';
import { PanelHeader } from '../PanelHeader';
import { PanelBody } from '../PanelBody';
import { PanelRow } from '../PanelRow';
import { Tag } from '../Tag';
import { Field } from '../Field';
import { ListToggle } from '../ListToggle';

type Props = {};

const PanelList:FunctionComponent<Props> = () => {
  const [activeRows, setActiveRows] = useState([]);
  const [headerStatus, setHeaderStatus] = useState({});

  const programData = [{
    "productName": "Competitive",
    "seasonName": "2021 Fall Season",
    "divisions": [
      "Unassigned",
      "BoysU14",
      "BoysU12",
      "GirlsU14",
      "GirlsU12"
    ]
  }, {
    "productName": "Recreational",
    "seasonName": "2021 Fall Season",
    "divisions": [
      "BoysU14",
      "BoysU12",
      "GirlsU14",
      "GirlsU12"
    ]
  }]

  // Dynamically create refs outside of the mapping below for performance reasons
  const bodyRefs = React.useRef([]);
  bodyRefs.current = programData.map((_, i) => bodyRefs.current[i] ?? createRef());

  const toggleAllRows = (productName: string, idx: number) => {
    const productChildElements = getChildren(idx);
    const divisions = [...productChildElements].map((division, index) => {
      return `${productName}-${division.innerText}-${index}`
    });

    setActiveRows([
      ...activeRows,
      ...divisions
    ]);

    setHeaderStatus({
      ...headerStatus,
      [productName]: {
        'activeCount': divisions.length,
        'status': null
      }
    });
  }

  const getChildren = (idx: number) => bodyRefs.current[idx].current &&
    bodyRefs.current[idx].current.children[0].childNodes;

  const getHeaderStatus = (productName: string, idx: number) => {
    const programChildren = getChildren(idx);

    if (headerStatus[productName]) {
      if (headerStatus[productName]['activeCount'] === programChildren.length) {
        return 'true';
      }

      if (headerStatus[productName]['activeCount'] > 0 &&
        headerStatus[productName]['activeCount'] < programChildren.length) {
        return 'indeterminate';
      }
    }

    return 'false';
  }

  const onDivisionClick = (productName: string, division: string) => {
    let newActiveList = [];
    let activeCount = 0;

    if (activeRows.includes(division)) {
      newActiveList = activeRows.filter(item => item != division);

      activeCount = headerStatus[productName] ?
        headerStatus[productName]['activeCount'] - 1 :
        headerStatus[productName]['activeCount'];

    } else {
      activeCount = headerStatus[productName] ? headerStatus[productName]['activeCount'] + 1 : 1;

      newActiveList = [
        ...activeRows,
        division
      ];
    }

    const programActiveStatus = {
      ...headerStatus,
      [productName]: {
        'activeCount': activeCount,
        'status': null
      }
    };

    setHeaderStatus(programActiveStatus);
    setActiveRows(newActiveList);
  }

  const buildRows = (productName: string, divisions: string[])  => {
    return divisions.map((division, idx) => {
      const uniqueId = `${productName}-${division}-${idx}`;
      const mods = activeRows.includes(uniqueId) ?
        'u-flex u-flexRow u-flexJustifyBetween Panel-row--active' :
        'u-flex u-flexRow u-flexJustifyBetween';

      return (
        <PanelRow key={ uniqueId } mods={ mods }>
          <p className="u-padLeftLg">{ division }</p>

          <Field
            isDisabled={false}
            name='Sample'
            type='checkbox'
            formFieldProps={{
              checked: activeRows.includes(uniqueId),
              onClick: () => { onDivisionClick(productName, uniqueId) }
            }}
          />
        </PanelRow>
      );
    });
  }

  const buildList = () => {
    return programData.map((program, idx) => {
      const {
        productName,
        seasonName,
        divisions
      } = program;

      return (
        <>
          <PanelHeader key={ productName } mods='Panel-header--list u-flexJustifyBetween u-padTopLg'>
            <div>
              <ListToggle
                onClick={() => {
                  bodyRefs.current[idx].current.classList &&
                  bodyRefs.current[idx].current.classList.toggle('Panel-body--closed');
                }}
              />
              <strong className='u-padSidesSm'>{ productName }</strong>
              <Tag text={ seasonName } />
            </div>

            <div>
              <Field
                isDisabled={false}
                name='Sample'
                type='checkbox'
                formFieldProps={{
                  checked: getHeaderStatus(productName, idx),
                  onClick: () => toggleAllRows(productName, idx)
                }}
              />
            </div>
          </PanelHeader>

          <div
            ref={bodyRefs.current[idx]}
            className="Panel-body-wrapper"
          >
            <PanelBody key={ seasonName }>
              { buildRows(productName, divisions) }
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

export default PanelList;
