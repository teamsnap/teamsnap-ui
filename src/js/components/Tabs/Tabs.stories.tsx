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

function LazyLoadTab(props) {
  console.log('Loading lazy tab');
  return (
    <h1>Hello from Lazy Tab 3 {props.testField}!</h1>
  )
}

class LzTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'Testing'
    };
  }

  render() {

    return (
      <h1>Hello from Lazy Tab 4!</h1>
    )
  };
}



export const WithOnLoad = () => (

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
        onLoad: () => alert("Loading Tab 2"),
      },
      {
        heading: 'Tab 3',
        component: LazyLoadTab,
        props: {testField: 'test value'},
      },
      {
        heading: 'Tab 4',
        content: <LzTab />,
        onLoad: () => alert("Loading Tab 3"),
      },
    ]}
  />
);
