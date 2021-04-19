import React, { FunctionComponent, useState } from 'react';
import { Panel } from '../Panel';
import { PanelHeader } from '../PanelHeader';
import { PanelBody } from '../PanelBody';
import { PanelRow } from '../PanelRow';
import { Icon } from '../Icon';
import { Tag } from '../Tag';
import { Field } from '../Field';

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

  const onDivisionClick = division => {
    const newActiveList = [
      ...activeDivisions,
      division
    ];

    setActiveDivisions(newActiveList);
  }

  const buildDivisionList = (productName, divisions)  => {
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
    return programData.map(program => {
      const {
        productName,
        seasonName,
        divisions
      } = program;

      return (
        <>
          <PanelHeader key={ productName } mods='Panel-header--list u-flexJustifyBetween u-padTopLg'>
            <div>
              <Icon name='down' />
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

          <PanelBody>
            { buildDivisionList(productName, divisions) }
          </PanelBody>
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
