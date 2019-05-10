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
        field="select"
        fieldProps={{
          options: [
            {
              label: "Tournament",
              value: "tournament"
            },
            {
              label: "Other",
              value: "other"
            }
          ]
        }}
      />
    </div>
  );
});

// TODO: Array to allow multiple checkboxes or radio buttons in one field wrapper

stories.add("Checkbox", () => {
  return (
    <div style={{ padding: 20 + "px" }}>
      <FieldWrapper name="example" label="Test Input" field="checkbox" fieldProps={{ options: [ { label: "Check me" }, { label: "Check me" }  ] }} />
    </div>
  );
});

stories.add("Radio", () => {
  return (
    <div style={{ padding: 20 + "px" }}>
      <FieldWrapper name="example" label="Test Input" field="radio" fieldProps={{ options: [ { label: "Video killed the radio star" }, { label: "Check me" }  ] }} />
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
