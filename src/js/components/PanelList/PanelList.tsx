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
  const [activeDivisions, setActiveDivisions] = useState([]);
  const [productStatus, setProductStatus] = useState({});

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

  const getChildrenCount = (idx: number) => bodyRefs.current[idx].current &&
    bodyRefs.current[idx].current.children[0].childNodes.length;

  const getProgramStatus = (productName: string, idx: number) => {
    const programChildCount = getChildrenCount(idx);

    if (productStatus[productName]) {
      if (productStatus[productName]['activeCount'] === programChildCount) {
        return 'true';
      }

      if (productStatus[productName]['activeCount'] > 0 &&
        productStatus[productName]['activeCount'] < programChildCount) {
        return 'indeterminate';
      }
    }

    return 'false';
  }

  const onDivisionClick = (productName: string, division: string) => {
    let newActiveList = [];
    let activeCount = 0;

    if (activeDivisions.includes(division)) {
      newActiveList = activeDivisions.filter(item => item != division);

      activeCount = productStatus[productName] ?
        productStatus[productName]['activeCount'] - 1 :
        productStatus[productName]['activeCount'];

    } else {
      activeCount = productStatus[productName] ? productStatus[productName]['activeCount'] + 1 : 1;

      newActiveList = [
        ...activeDivisions,
        division
      ];
    }

    const programActiveStatus = {
      ...productStatus,
      [productName]: {
        'activeCount': activeCount,
        'status': null
      }
    };

    setProductStatus(programActiveStatus);
    setActiveDivisions(newActiveList);
  }

  const buildDivisionList = (productName: string, divisions: string[])  => {
    return divisions.map((division, idx) => {
      const uniqueId = `${productName}-${division}-${idx}`;
      const mods = activeDivisions.includes(uniqueId) ?
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
              checked: activeDivisions.includes(uniqueId),
              onClick: () => { onDivisionClick(productName, uniqueId) }
            }}
          />
        </PanelRow>
      );
    });
  }

  const buildProgramList = () => {
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
                  checked: getProgramStatus(productName, idx),
                  onClick: () => {}
                }}
              />
            </div>
          </PanelHeader>

          <div
            ref={bodyRefs.current[idx]}
            className="Panel-body-wrapper"
          >
            <PanelBody key={ seasonName }>
              { buildDivisionList(productName, divisions) }
            </PanelBody>
          </div>
        </>
      );
    })
  }

  console.table(productStatus);

  return (
    <Panel>
      { buildProgramList() }
    </Panel>
  );
}

export default PanelList;
