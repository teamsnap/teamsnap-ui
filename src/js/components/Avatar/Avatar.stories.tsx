import * as React from "react";
import { storiesOf } from "@storybook/react";
import Avatar from "./Avatar";

const stories = storiesOf("Avatar", module);

export default {
  title: 'Avatar',
  component: Avatar,
};

stories.add("Default", () => (
  <Avatar
    mods="u-spaceRightSm"
    src="https://aa5498032991a101442c-34c0f4eec246050dfc1ee92670a7b97d.ssl.cf1.rackcdn.com/logo-icon-dafd29abff7b6ca55ad71c35bd34d679.png"
    size="md"
   />
));
