import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Select from './Select';

const stories = storiesOf('Select', module);

export default {
  title: 'Select',
  component: Select,
};

const optionsList = [
  {
    label: 'Option 1',
    value: 'option 1',
  },
  {
    label: 'Option 2',
    value: 'option 2',
  },
  {
    label: 'Option 3',
    value: 'option 3',
  },
];

stories.add('Default', () => (
  <div>
    <label htmlFor="standardSelect" className="FieldGroup-label">
      Standard Select
    </label>
    <Select mods="u-size1of3" name="standardSelect" options={optionsList} />
  </div>
));

stories.add('Alternates', () => (
  <div>
    <label htmlFor="disabledSelect" className="FieldGroup-label">
      Select with Disabled Option
    </label>
    <Select
      mods="u-size1of3"
      name="disabledSelect"
      disabled
      options={[
        {
          label: '--Select an Option--',
          value: 'unselected',
          disabled: true,
        },
        ...optionsList,
      ]}
    />

    <label htmlFor="largeSelect" style={{ marginTop: '15px' }} className="FieldGroup-label">
      Large Select
    </label>
    <Select
      mods="u-size1of2"
      name="largeSelect"
      className="SelectBox SelectBox--large"
      options={optionsList}
    />
  </div>
));
