import * as React from "react";
import { storiesOf } from "@storybook/react";
import Divider from "./Divider";

export default {
  title: 'Divider',
  component: Divider,
};

storiesOf("Divider", module)
  .add("Default", () => <Divider />)
  .add("Thick", () => <Divider isThick />);
