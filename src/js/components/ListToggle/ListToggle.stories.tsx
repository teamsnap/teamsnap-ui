import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { ListToggle } from '.';

const stories = storiesOf('ListToggle', module);

export default {
  title: 'ListToggle',
  component: ListToggle,
};

stories.add('List Toggle', () => <ListToggle onClick={() => {}} />);
