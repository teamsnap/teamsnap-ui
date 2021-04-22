import * as React from "react";
import { storiesOf } from "@storybook/react";
import { ToggleCheckboxList } from '../ToggleCheckboxList'

const stories = storiesOf("ToggleCheckboxList", module);

stories.add("Default", () => (
  <ToggleCheckboxList />
));
