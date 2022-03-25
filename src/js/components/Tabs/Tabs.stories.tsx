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

export const RenderOnload = () => (
  <Tabs
    mods="u-spaceRightSm"
    renderOnload
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

export const OnloadCallback = () => (
  <Tabs
    mods="u-spaceRightSm"
    tabs={[
      {
        heading: 'Tab 1',
        content: <h1>Hello from Tab 1!</h1>,
        afterLoad: () => {
          console.log('After Load 1');
        },
      },
      {
        heading: 'Tab 2',
        content: <h1>Hello from Tab 2!</h1>,
        afterLoad: () => {
          console.log('After Load 2');
        },
      },
    ]}
  />
);

export const DisableFirstOnloadCallback = () => (
  <Tabs
    mods="u-spaceRightSm"
    disableFirstAfterLoad
    tabs={[
      {
        heading: 'Tab 1',
        content: <h1>Hello from Tab 1!</h1>,
        afterLoad: () => {
          alert('After Load 1');
        },
      },
      {
        heading: 'Tab 2',
        content: <h1>Hello from Tab 2!</h1>,
        afterLoad: () => {
          alert('After Load 2');
        },
      },
    ]}
  />
);
