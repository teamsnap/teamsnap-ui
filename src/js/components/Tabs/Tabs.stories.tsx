import * as React from "react";
import { storiesOf } from "@storybook/react";
import Tabs from "./Tabs";

const stories = storiesOf("Tabs", module);

stories.add("Default", () => (
  <Tabs
    mods="u-spaceRightSm"
    tabs={[
      {
        heading: "Tab 1",
        content: <h1>Hello from Tab 1!</h1>
      },
      {
        heading: "Tab 2",
        content: <h1>Hello from Tab 2!</h1>
      }
    ]}
   />
));
