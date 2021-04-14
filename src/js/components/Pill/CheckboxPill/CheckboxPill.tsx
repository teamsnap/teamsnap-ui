import React, { useState } from 'react';
import { Pill } from '../';
import { Field } from '../../Field';

const CheckboxPill = () => {
  const [checked, setChecked] = useState(false);

  const handleState = () => {
    setChecked(!checked)
  }

  return (
    <div className='Grid Grid--withGutter'>
      <div className='Grid-cell u-size1of3'>
        <Pill
          align='center'
          active={checked}
        >
          <Field
            formFieldProps={{
              checked: checked,
              onClick: () => { handleState() },
              text: 'Click me 1!'
            }}
            name="Sample"
            status={undefined}
            type="checkbox"
          />
        </Pill>
      </div>
    </div>
  )
};

export default CheckboxPill;
