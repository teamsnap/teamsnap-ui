import * as React from "react";
import { storiesOf } from "@storybook/react";
import { select, text } from "@storybook/addon-knobs/react";
import Field from "./Field";
import { FieldLabel } from "../FieldLabel";
import { FieldMessage } from "../FieldMessage";
import { Input } from "../Input";
import { Select } from "../Select";
import { Checkbox } from "../Checkbox";
import { Icon } from "../Icon";

const stories = storiesOf("Field", module);

const statusOptions = {
  success: "success",
  error: "error",
  default: null
};

const iconOptions = {
  left: "left",
  right: "right",
  default: "left"
};

stories.add("FieldGroup with Input text child", () => {
  const errorMessage = text("Error Message", "There was an error");
  const status = select("status", statusOptions);
  const placeholder = text("Placeholder", "Input Placeholder");

  return (
    <Field
      status={status}
      name="Sample"
      placeholder={placeholder}
      label="This is a sample input"
      caption="This input is..."/>
  );
});
