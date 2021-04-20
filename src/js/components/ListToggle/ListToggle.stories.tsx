import * as React from "react";
import { storiesOf } from "@storybook/react";
import { ListToggle } from '../ListToggle';

const stories = storiesOf("ListToggle", module);

stories.add("List Toggle", () => (
  <ListToggle
    onClick={ () => {} }
  />
));
