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

interface Tab {
  heading: React.ReactNode;
  content: React.ReactNode;
}

export interface Props {
  mods?: string;
  tabs: Tab[];
}

const Tabs: React.FunctionComponent<Props> = ({ mods, tabs }: Props) => {
  const [activeTabIndex, setActiveTabIndex] = React.useState(0);
  const boolMods = !!mods;

  return (
    <div className={`Tabs ${boolMods ? mods : ''}`}>
      <ul className="Tabs-header">
        {tabs.map((tab, index) => (
          <li
            key={`Tabs-headerItem-${index}`}
            onClick={() => setActiveTabIndex(index)}
            className={`Tabs-headerItem ${index === activeTabIndex ? 'is-active' : ''}`}
          >
            {tab.heading}
          </li>
        ))}
      </ul>
      <div className="Tabs-content">
        {tabs.map((tab, index) => (
          <div
            key={`Tabs-contentItem-${index}`}
            className={`Tabs-contentItem ${index === activeTabIndex ? 'is-active' : ''}`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
