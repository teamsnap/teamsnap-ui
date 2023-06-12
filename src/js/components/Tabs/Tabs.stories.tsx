import * as React from 'react';
import Tabs from './Tabs';
import { Button } from '../Button';

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

export const SetActiveTab = () => {
  const [tab, selectTab] = React.useState(0);

  return (
    <>
      <Button type="button" onClick={() => selectTab(0)}>
        Tab 1
      </Button>
      <Button type="button" onClick={() => selectTab(1)}>
        Tab 2
      </Button>
      <Tabs
        activeIndex={tab}
        setActiveIndex={selectTab}
        mods="u-spaceRightSm"
        disableFirstAfterLoad
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
    </>
  );
};
