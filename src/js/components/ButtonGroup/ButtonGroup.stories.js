import React from "react";
import { storiesOf } from "@storybook/react";
import ButtonGroup from "./ButtonGroup";
import Button from "../Button";

const stories = storiesOf("ButtonGroup", module);

stories.add("Button Children", () => {
  return (
    <ButtonGroup >
      <Button>Button1</Button>

      <Button>Button2</Button>
    </ButtonGroup>);
})
