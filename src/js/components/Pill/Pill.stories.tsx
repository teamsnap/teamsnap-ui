import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Pill, CheckboxPill } from './'

const stories = storiesOf('Pill', module);

stories.add('Default', () => (
  <Pill>
    <p>Default</p>
  </Pill>
));

stories.add('Centered Content', () => (
  <Pill align="center">
    <p>Centered Content</p>
  </Pill>
));

stories.add('Checkbok Pill', () => (
  <CheckboxPill />
));
