import React from "react";
import { storiesOf } from "@storybook/react";
import FieldWrapper from "./FieldWrapper";

const stories = storiesOf("FieldWrapper", module);

stories.add("Default", () => {
  return (
    <div style={{ padding: 20 + "px" }}>
      <FieldWrapper
        name="example"
        label="Test Input"
        field="input"
        fieldProps={{ placeholder: "Some placehodler text" }}
      />
    </div>
  );
});

stories.add("Select", () => {
  return (
    <div style={{ padding: 20 + "px" }}>
      <FieldWrapper
        name="example"
        label="Test Input"
        field="input"
        fieldProps={{ placeholder: "Some placehodler text" }}
      />
    </div>
  );
});

// TODO: Array to allow multiple checkboxes or radio buttons in one field wrapper

stories.add("Checkbox", () => {
  return (
    <div style={{ padding: 20 + "px" }}>
      <FieldWrapper name="example" label="Test Input" field="checkbox" fieldProps={{ label: "Check me" }} />
    </div>
  );
});

stories.add("Radio", () => {
  return (
    <div style={{ padding: 20 + "px" }}>
      <FieldWrapper name="example" label="Test Input" field="radio" fieldProps={{ label: "Video killed the radio star" }} />
    </div>
  );
});

stories.add("Toggle", () => {
  return (
    <div style={{ padding: 20 + "px" }}>
      <FieldWrapper name="example" label="Test Input" field="toggle" />
    </div>
  );
});

stories.add("Textarea", () => {
  return (
    <div style={{ padding: 20 + "px" }}>
      <FieldWrapper
        name="example"
        label="Test Input"
        field="textarea"
        fieldProps={{ placeholder: "Some placehodler text" }}
      />
    </div>
  );
});
