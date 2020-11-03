/**
 * @name Tabs
 *
 * @description
 *  Used to show tabs and dynamic content to be displayed while a given tab is active
 *
 * @example
 * <Tabs
 *   mods="u-spaceRightSm"
 *   tabs={[
 *     {
 *       heading: "Tab 1",
 *       content: <h1>Hello from Tab 1!</h1>
 *     },
 *     {
 *       heading: "Tab 2",
 *       content: <h1>Hello from Tab 2!</h1>
 *     }
 *   ]}
 *  />
 *
 */

import * as React from "react";

interface Tab {
  heading: React.ReactNode;
  content: React.ReactNode;
}

interface Props {
  mods: string;
  tabs: Tab[];
}

const Tabs: React.FunctionComponent<Props> = ({ mods, tabs }) => {
  const [activeTabIndex, setActiveTabIndex] = React.useState(0);

  return (
    <div className={`Tabs ${mods}`}>
      <ul className="Tabs-header">
        {tabs.map((tab, index) => (
          <li
            onClick={() => setActiveTabIndex(index)}
            className={`Tabs-headerItem ${
              index === activeTabIndex ? "is-active" : ""
            }`}
          >
            {tab.heading}
          </li>
        ))}
      </ul>
      <div className="Tabs-content">
        {tabs.map((tab, index) => (
          <div
            className={`Tabs-contentItem ${
              index === activeTabIndex ? "is-active" : ""
            }`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
