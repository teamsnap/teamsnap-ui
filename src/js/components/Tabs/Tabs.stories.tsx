import * as React from 'react';
import Tabs from './Tabs';

export default {
  title: 'Components/Surfaces/Tabs',
};

export const Default = () => (
  <Tabs
    mods="u-spaceRightSm"
    tabs={[
      {
        heading: 'Tab 1',
        content: <h1>Hello from Tab 1!</h1>,
      },
      {
        heading: 'Tab 2',
        content: <h1>Hello from Tab 2!</h1>,
      },
    ]}
  />
);
