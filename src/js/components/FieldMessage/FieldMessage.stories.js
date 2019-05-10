import React from "react";
import { storiesOf } from "@storybook/react";
import FieldGroup from "../FieldGroup";
import FieldLabel from "../FieldLabel";
import FieldMessage from "./FieldMessage";
import Input from "../Input";

const stories = storiesOf("FieldMessage", module);

stories.add("Default", () => {
  return (
    <div style={{ padding: 20 + "px" }}>
      <FieldMessage isError>Test Field Message Error</FieldMessage>
    </div>
  );
});

stories.add("FieldMessage with Input Sibling", () => {
  return (
    <div style={{ padding: 20 + "px" }}>
      <FieldGroup name="example" label="Check Me" isInline status="error">
        <FieldLabel name="example">Text Input</FieldLabel>
        <Input name="storybook" type="text" />
        <FieldMessage isError>Test Field Message Error</FieldMessage>
      </FieldGroup>
    </div>
  );
});
