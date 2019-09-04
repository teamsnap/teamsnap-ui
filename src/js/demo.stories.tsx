import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Icon } from "./components/Icon";

const stories = storiesOf("Demo", module);

stories.add("All", () => {
  return <Icon name={"home"} />;
});
