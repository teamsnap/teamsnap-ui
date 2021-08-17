import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';
import FieldGroup from './FieldGroup';
import { FieldLabel } from '../FieldLabel';
import { FieldMessage } from '../FieldMessage';
import { Input } from '../Input';
import { Select } from '../Select';
import { Checkbox } from '../Checkbox';
import { Icon } from '../Icon';
import { Statuses } from '../../types';

const stories = storiesOf('FieldGroup [deprecated]', module);

export default {
  title: 'FieldGroup',
  component: FieldGroup,
};

const statusOptions = {
  success: 'success',
  error: 'error',
  default: null,
};

stories.add('FieldGroup with Input text child', () => {
  const errorMessage = text('Error Message', 'There was an error', null);
  const status = select('status', statusOptions, null);

  return (
    <FieldGroup status={status}>
      <FieldLabel name="example">Text Input</FieldLabel>
      <Input name="storybook" type="text" />
      {status === 'error' ? (
        <FieldMessage status={Statuses.ERROR}>{errorMessage}</FieldMessage>
      ) : null}
    </FieldGroup>
  );
});

stories.add('FieldGroup with Select child', () => {
  const errorMessage = text('Error Message', 'There was an error', null);
  const status = select('status', statusOptions, null);

  return (
    <FieldGroup status={status}>
      <FieldLabel name="example">Select Box</FieldLabel>
      <Select
        name="LineItemFeeCategory"
        options={[
          {
            label: 'Tournament',
            value: 'tournament',
          },
          {
            label: 'Other',
            value: 'other',
          },
        ]}
      />
      {status === Statuses.ERROR ? (
        <FieldMessage status={Statuses.ERROR}>{errorMessage}</FieldMessage>
      ) : null}
    </FieldGroup>
  );
});

stories.add('FieldGroup with Input text and Icon children', () => {
  const errorMessage = text('Error Message', 'There was an error');
  const status = select('status', statusOptions, null);

  return (
    <FieldGroup status={status}>
      <FieldLabel name="example">Location Input</FieldLabel>
      <Input name="storybook" type="text" leftIcon={<Icon name="location" />} />
      {status === Statuses.ERROR ? (
        <FieldMessage status={Statuses.ERROR}>{errorMessage}</FieldMessage>
      ) : null}
    </FieldGroup>
  );
});

stories.add('FieldGroup with Checkbox children', () => {
  const errorMessage = text('Error Message', 'There was an error', null);
  const status = select('status', statusOptions, null);

  return (
    <FieldGroup status={status}>
      <FieldLabel name="example">Select all that apply:</FieldLabel>
      <Checkbox name="example" label="Check Me" isInline />
      <Checkbox name="example2" label="Check Me 2" isInline />
      {status === 'error' ? (
        <FieldMessage status={Statuses.ERROR}>{errorMessage}</FieldMessage>
      ) : null}
    </FieldGroup>
  );
});
