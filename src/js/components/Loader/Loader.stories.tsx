import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Loader from './Loader';

const stories = storiesOf('Loader', module);

export default {
  title: 'Loader',
  component: Loader,
};

stories.add('Default', () => (
  <>
    <Loader type="spin" />
  </>
));

stories.add('Pulse', () => (
  <>
    <Loader type="pulse" />
  </>
));

stories.add('Jello', () => (
  <>
    <Loader type="jello" />
  </>
));

stories.add('Loader with Text', () => (
  <>
    <Loader type="spin" text="Loading" />
  </>
));

stories.add('Loader with Message', () => (
  <>
    <Loader type="spin" message="Please while wait we take care of this for you." />
  </>
));

stories.add('Loader with Text & Message', () => (
  <>
    <Loader
      type="spin"
      text="Processing"
      message="Please while wait we take care of this for you."
    />
  </>
));
