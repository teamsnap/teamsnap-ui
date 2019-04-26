import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";
import Icon from "./Icon";

const stories = storiesOf("Icon", module);

stories.add("Default", () => 
  <Icon name={ text("Icon name", "home") } />
);
