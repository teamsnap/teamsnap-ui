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
    src="https://storage.googleapis.com/ts_assets_prod-classic_assets/logo-icon-dafd29abff7b6ca55ad71c35bd34d679.png"
    size="md"
   />
));
