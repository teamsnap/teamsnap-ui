import * as React from "react";

import { storiesOf } from "@storybook/react";
import { action } from '@storybook/addon-actions';
import { select, text } from '@storybook/addon-knobs';
import FieldWrapper from "./FieldWrapper";

const stories = storiesOf("FieldWrapper", module);

const statusOptions = {
  success: "success",
  error: "error",
  default: null
};

stories.add("Default", () => {
  return (
    <FieldWrapper
      name="example"
      label="Test Input"
      field="input"
      fieldProps={{ placeholder: "Some placehodler text" }}
    />
  );
});

stories.add("Select", () => {
  const errorMessage = text("Error Message", "There was an error");
  const status = select("status", statusOptions);

  return (
    <FieldWrapper
      name="example"
      label="Test Input"
      field="select"
      status={status}
      message={status === "error" ? errorMessage : null}
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
  );
});

// TODO: Array to allow multiple checkboxes or radio buttons in one field wrapper

stories.add("Checkbox", () => {
  const errorMessage = text("Error Message", "There was an error");
  const status = select("status", statusOptions);

  return (
    <FieldWrapper
      name="example"
      label="Test Input"
      field="checkbox"
      status={status}
      message={status === "error" ? errorMessage : null}
      fieldProps={{
        inputProps: {
          onChange: action('checkbox value changed'),
        },
        options: [{ label: "Check me A", name: "A", value: "A" }, { label: "Check me B", name: "B", value: "B" }]
      }}
    />
  );
});

stories.add("Radio", () => {
  const errorMessage = text("Error Message", "There was an error");
  const status = select("status", statusOptions);

  return (
    <FieldWrapper
      name="example"
      label="Test Input"
      field="radio"
      status={status}
      message={status === "error" ? errorMessage : null}
      fieldProps={{
        inputProps: {
          onChange: action('radio value changed'),
        },
        options: [
          { label: "Video killed the radio star", value: "A" },
          { label: "Check me", value: "B" }
        ]
      }}
    />
  );
});

stories.add("Toggle", () => {
  const errorMessage = text("Error Message", "There was an error");
  const status = select("status", statusOptions);

  return (
    <FieldWrapper
      name="example"
      label="Test Input"
      field="toggle"
      status={status}
      message={status === "error" ? errorMessage : null}
    />
  );
});

stories.add("Textarea", () => {
  const errorMessage = text("Error Message", "There was an error");
  const status = select("status", statusOptions);

  return (
    <FieldWrapper
      name="example"
      label="Test Input"
      field="textarea"
      status={status}
      message={status === "error" ? errorMessage : null}
      fieldProps={{ placeholder: "Some placehodler text" }}
    />
  );
});
