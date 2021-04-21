import React, { createRef, FunctionComponent, useState } from 'react';
import { Panel } from '../Panel';
import { PanelHeader } from '../PanelHeader';
import { PanelBody } from '../PanelBody';
import { PanelRow } from '../PanelRow';
import { Tag } from '../Tag';
import { Field } from '../Field';
import { ListToggle } from '../ListToggle';

type Props = {

};

const PanelList:FunctionComponent<Props> = () => {
  const [activeDivisions, setActiveDivisions] = useState([]);

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

  const onDivisionClick = (division: string) => {
    let newActiveList = [];

    if (activeDivisions.includes(division)) {
      newActiveList = activeDivisions.filter(item => item != division);
    } else {
      newActiveList = [
        ...activeDivisions,
        division
      ];
    }

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
            status={status}
            type='checkbox'
            formFieldProps={{
              checked: activeDivisions.includes(uniqueId),
              onClick: () => { onDivisionClick(uniqueId) }
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
              <ListToggle onClick={ () => bodyRefs.current[idx].current.classList.toggle('Panel-body--closed') } />
              <strong className='u-padSidesSm'>{ productName }</strong>
              <Tag text={ seasonName } />
            </div>

            <div>
              <Field
                isDisabled={false}
                name='Sample'
                status={status}
                type='checkbox'
                formFieldProps={{
                  checked: 'indeterminate',
                  onClick: () => { }
                }}
              />
            </div>
          </PanelHeader>

          <div
            ref={bodyRefs.current[idx]}
            className="Panel-body-wrapper"
          >
            <PanelBody>
              { buildDivisionList(productName, divisions) }
            </PanelBody>
          </div>
        </>
      );
    })
  }

  return (
    <Panel>
      { buildProgramList() }
    </Panel>
  );
}

export default PanelList;
