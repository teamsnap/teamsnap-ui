import * as React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, select } from "@storybook/addon-knobs/react";
import Nav from "./Nav";
const stories = storiesOf("Nav", module);

stories.add("Default", () => (
  <Nav>
    <Nav.Item icon="home" isActive>Row 1</Nav.Item>
    <Nav.Item icon="home">Row 2</Nav.Item>
    <Nav.Item icon="home">Row 3</Nav.Item>
  </Nav>
));
