import React from "react";
import { storiesOf } from "@storybook/react";
import FieldGroup from "../FieldGroup";
import FieldLabel from "./FieldLabel";
import Input from "../Input";

const stories = storiesOf("FieldLabel", module);

stories.add("Default", () => {
  return (
    <div style={{ padding: 20 + "px" }}>
      <FieldLabel name="example">Text Input</FieldLabel>
    </div>
  );
});

stories.add("FieldLabel with Input Sibling", () => {
  return (
    <div style={{ padding: 20 + "px" }}>
      <FieldGroup name="example" label="Check Me" isInline>
        <FieldLabel name="example">Text Input</FieldLabel>
        <Input name="storybook" type="text" />
      </FieldGroup>
    </div>
  );
});
