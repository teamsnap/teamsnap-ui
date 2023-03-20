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
import { MutableRefObject } from 'react';
import { Button } from '../Button';

interface Tab {
  heading: React.ReactNode;
  content: React.ReactNode;
  afterLoad?: () => void;
}

export interface Props {
  activeIndex?: number;
  mods?: string;
  tabs: Tab[];
  testId?: string;
  renderOnload?: boolean;
  disableFirstAfterLoad?: boolean;
}

const Tabs = React.forwardRef(
  (
    { activeIndex, mods, tabs, testId, renderOnload, disableFirstAfterLoad }: Props,
    ref: MutableRefObject<{ setActiveTabIndex: (index: number) => void }>
  ) => {
    const [activeTabIndex, setActiveTabIndex] = React.useState(activeIndex ?? 0);
    const [initialized, setInitialized] = React.useState(false);
    const boolMods = !!mods;

    React.useImperativeHandle(ref, () => ({
      setActiveTabIndex: (index: number) => {
        setActiveTabIndex(index);
      },
    }));

    React.useEffect(() => {
      setInitialized(true);
    }, []);

    React.useEffect(() => {
      if (tabs[activeTabIndex].afterLoad && (!disableFirstAfterLoad || initialized)) {
        tabs[activeTabIndex].afterLoad();
      }
    }, [activeTabIndex]);

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
                {/* 
                // @ts-ignore */}
                {tab.heading}
              </Button>
            </li>
          ))}
        </ul>
        <div className="Tabs-content">
          {renderOnload ? (
            <div key={`Tabs-contentItem-${activeTabIndex}`} className="Tabs-contentItem is-active">
              {tabs[activeTabIndex].content}
            </div>
          ) : (
            <>
              {tabs.map((tab, index) => (
                <div
                  key={`Tabs-contentItem-${index}`}
                  className={`Tabs-contentItem ${index === activeTabIndex ? 'is-active' : ''}`}
                >
                  {tab.content}
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    );
  }
);

export default Tabs;
