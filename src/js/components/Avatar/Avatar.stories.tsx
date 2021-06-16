import * as React from "react";
import { storiesOf } from "@storybook/react";
import { text, select } from '@storybook/addon-knobs';
import Avatar from "./Avatar";

const stories = storiesOf("Avatar", module);

const optionsList = {
  "xs": "xs",
  "sm": "sm",
  "md": "md",
  "lg": "lg",
  "xl": "xl",
  "xxl": "xxl"
}

stories.add("Default", () => (
  <Avatar
    mods="u-spaceRightSm"
    src={text("src", "https://aa5498032991a101442c-34c0f4eec246050dfc1ee92670a7b97d.ssl.cf1.rackcdn.com/logo-icon-dafd29abff7b6ca55ad71c35bd34d679.png")}
    size={select("size", optionsList, "md")}
   />
));
