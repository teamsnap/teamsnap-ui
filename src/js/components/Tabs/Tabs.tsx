/**
 * @name Tabs
 *
 * @description
 *  Used to show tabs and dynamic content to be displayed while a given tab is active
 *
 * @example
 * <Tabs
 *   mods='u-spaceRightSm'
 *   tabs={[
 *     {
 *       heading: 'Tab 1',
 *       content: <h1>Hello from Tab 1!</h1>
 *     },
 *     {
 *       heading: 'Tab 2',
 *       content: <h1>Hello from Tab 2!</h1>
 *     }
 *   ]}
 *  />
 *
 */

import * as React from 'react';
import { Button } from '../Button';

interface Tab {
  heading: React.ReactNode;
  content?: React.ReactNode;
  component?: typeof React.Component;
  props?: object;
  onLoad?: () => void;
}

export interface Props {
  mods?: string;
  tabs: Tab[];
  testId?: string;
}

const Tabs: React.FunctionComponent<Props> = ({ mods, tabs, testId }: Props) => {
  const initialTabIndex = 0;
  const [activeTabIndex, setActiveTabIndex] = React.useState(initialTabIndex);
  const boolMods = !!mods;

  const loadTab = (tabIndex) => {
    const tab = tabs[tabIndex];
    // console.log('tab', tab, typeof tab.content, tab.content)
    // console.log('tab2', tab.content.toString(), tab.content.type['displayName'] || tab.content.type['name'])
  //  const { type } = tab.content;
  //   if (type === 'LazyLoadTab') {
  //     console.log('is lazy load')
  //   }

    if (tab?.onLoad) {
      tab.onLoad();
    }
  }

  React.useEffect(() => {
    loadTab(initialTabIndex);
  }, []);

  const changeTab = (tabIndex) => {
    loadTab(tabIndex);
    setActiveTabIndex(tabIndex);
  }

  return (
    <div className={`Tabs ${boolMods ? mods : ''}`} data-testid={testId}>
      <ul className="Tabs-header">
        {tabs.map((tab, index) => (
          <li
            key={`Tabs-headerItem-${index}`}
            className={`Tabs-headerItem ${index === activeTabIndex ? 'is-active' : ''}`}
          >
            <Button
              style={{ color: 'inherit' }}
              onClick={() => changeTab(index)}
              type="link"
            >
              {tab.heading}
            </Button>
          </li>
        ))}
      </ul>
      <div className="Tabs-content">
        {tabs.map((tab, index) => (
          <div
            key={`Tabs-contentItem-${index}`}
            className={`Tabs-contentItem ${index === activeTabIndex ? 'is-active' : ''}`}
          >
            {tab.component && index === activeTabIndex ? <tab.component {...tab.props}/> : null}
            {!tab.component ? tab.content : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
