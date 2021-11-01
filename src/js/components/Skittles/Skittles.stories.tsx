import * as React from 'react';
import Skittles from './Skittles';

export default {
  title: 'Components/Data Display/Skittles',
};

export const Default = () => (
  <div style={{ padding: `${20}px` }}>
    <Skittles text="Soccer Co." style={{ margin: '4px' }} />
    <Skittles text="Soccer Land" style={{ margin: '4px' }} />
    <Skittles text="Football" style={{ margin: '4px' }} />
    <Skittles text="Baseball" style={{ margin: '4px' }} />
    <Skittles text="Luke Skywalker" style={{ margin: '4px' }} />
  </div>
);
