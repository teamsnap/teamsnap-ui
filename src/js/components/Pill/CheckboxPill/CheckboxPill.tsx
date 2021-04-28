import * as React from 'react';
import { Grid } from '../../Grid';
import { Cell } from '../../Cell';
import { Pill } from '../';
import { Field } from '../../Field';

const CheckboxPill = () => {
  const [checked, setChecked] = React.useState(false);

  const handleState = () => {
    setChecked(!checked)
  }

  return (
    <Grid>
      <Cell>
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
      </Cell>
    </Grid>
  )
};

export default CheckboxPill;
