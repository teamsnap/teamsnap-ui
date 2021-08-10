import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Skittles from './Skittles';

const stories = storiesOf('Skittles', module);

export default {
  title: 'Skittles',
  component: Skittles,
};

stories.add('Default', () => (
  <div style={{ padding: `${20  }px` }}>
    <Skittles text="Soccer Co." style={{ margin: '4px' }} />
    <Skittles text="Soccer Land" style={{ margin: '4px' }} />
    <Skittles text="Football" style={{ margin: '4px' }} />
    <Skittles text="Baseball" style={{ margin: '4px' }} />
    <Skittles text="Luke Skywalker" style={{ margin: '4px' }} />
  </div>
));
