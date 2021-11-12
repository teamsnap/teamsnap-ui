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
  content: React.ReactNode;
}

export interface Props {
  mods?: string;
  tabs: Tab[];
  testId?: string;
}

const Tabs: React.FunctionComponent<Props> = ({ mods, tabs, testId }: Props) => {
  const [activeTabIndex, setActiveTabIndex] = React.useState(0);
  const boolMods = !!mods;

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
              onClick={() => setActiveTabIndex(index)}
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
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
