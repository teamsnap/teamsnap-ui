import React from "react";
import { storiesOf } from "@storybook/react";
import { select, text } from "@storybook/addon-knobs/react";
import FieldWrapper from "./FieldWrapper";

const stories = storiesOf("FieldWrapper", module);

const statusOptions = {
  success: "success",
  error: "error",
  default: null
};

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
  const errorMessage = text("Error Message", "There was an error");
  const status = select("status", statusOptions);

  return (
    <div style={{ padding: 20 + "px" }}>
      <FieldWrapper
        name="example"
        label="Test Input"
        field="select"
        status={ status }
        message={ status === "error" ? errorMessage : null }
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
  const errorMessage = text("Error Message", "There was an error");
  const status = select("status", statusOptions);

  return (
    <div style={{ padding: 20 + "px" }}>
      <FieldWrapper
        name="example"
        label="Test Input"
        field="checkbox"
        status={ status }
        message={ status === "error" ? errorMessage : null }
        fieldProps={{ options: [{ label: "Check me" }, { label: "Check me" }] }}
      />
    </div>
  );
});

stories.add("Radio", () => {
  const errorMessage = text("Error Message", "There was an error");
  const status = select("status", statusOptions);

  return (
    <div style={{ padding: 20 + "px" }}>
      <FieldWrapper
        name="example"
        label="Test Input"
        field="radio"
        status={ status }
        message={ status === "error" ? errorMessage : null }
        fieldProps={{ options: [{ label: "Video killed the radio star" }, { label: "Check me" }] }}
      />
    </div>
  );
});

stories.add("Toggle", () => {
  const errorMessage = text("Error Message", "There was an error");
  const status = select("status", statusOptions);

  return (
    <div style={{ padding: 20 + "px" }}>
      <FieldWrapper
        name="example"
        label="Test Input"
        field="toggle"
        status={ status }
        message={ status === "error" ? errorMessage : null }
      />
    </div>
  );
});

stories.add("Textarea", () => {
  const errorMessage = text("Error Message", "There was an error");
  const status = select("status", statusOptions);

  return (
    <div style={{ padding: 20 + "px" }}>
      <FieldWrapper
        name="example"
        label="Test Input"
        field="textarea"
        status={ status }
        message={ status === "error" ? errorMessage : null }
        fieldProps={{ placeholder: "Some placehodler text" }}
      />
    </div>
  );
});
