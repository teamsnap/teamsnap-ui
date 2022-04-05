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

export const SetActiveTab = () => {
  const tabRef = React.useRef<{ setActiveTabIndex: (index: number) => void }>();
  const selectTab = (index) => {
    if (tabRef.current) {
      tabRef.current.setActiveTabIndex(index);
    }
  };
  return (
    <>
      <button type="button" onClick={() => selectTab(0)}>
        Tab 1
      </button>
      <button type="button" onClick={() => selectTab(1)}>
        Tab 2
      </button>
      <Tabs
        ref={tabRef}
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
