import React from "react";
import { storiesOf } from "@storybook/react";
// import { action } from '@storybook/addon-actions';
// import { withInfo } from '@storybook/addon-info';
import {
  withKnobs,
  text,
} from "@storybook/addon-knobs";
import Icon from "./Icon";

const stories = storiesOf("Icon", module);

stories.addDecorator(withKnobs);

stories.add("Default", () => <Icon name={ text("Icon name", "home") } />);
