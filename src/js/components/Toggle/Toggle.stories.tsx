import * as React from "react";
import { storiesOf } from "@storybook/react";
import Toggle from "./Toggle";

const stories = storiesOf("Toggle", module);

stories.add("Default", () => <Toggle name="myToggle" />);
