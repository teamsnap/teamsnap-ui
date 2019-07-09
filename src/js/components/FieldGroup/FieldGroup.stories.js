import React from "react";
import { storiesOf } from "@storybook/react";
import { select } from "@storybook/addon-knobs/react";
import FieldGroup from "./FieldGroup";
import FieldLabel from "../FieldLabel";
import Input from "../Input";
import Select from "../Select";
import Checkbox from "../Checkbox";
import Icon from "../Icon";

const stories = storiesOf("FieldGroup", module);

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

stories.add("Default", () => {
  const status = select("status", statusOptions);

  return <FieldGroup name="example" label="Check Me" isInline status={ status } />;
});

stories.add("FieldGroup with Input text child", () => {
  const status = select("status", statusOptions);

  return (
    <FieldGroup name="example" label="Check Me" isInline status={ status }>
      <FieldLabel name="example">Text Input</FieldLabel>
      <Input name="storybook" type="text" />
    </FieldGroup>
  );
});

stories.add("FieldGroup with Select child", () => {
  const status = select("status", statusOptions);

  return (
    <FieldGroup name="example" label="Check Me" isInline status={ status }>
      <FieldLabel name="example">Select Box</FieldLabel>
      <Select
        name="LineItemFeeCategory"
        options={ [
          {
            label: "Tournament",
            value: "tournament"
          },
          {
            label: "Other",
            value: "other"
          }
        ] }
      />
    </FieldGroup>
  );
});

stories.add("FieldGroup with Input text and Icon children", () => {
  const status = select("status", statusOptions);
  const iconPosition = select("iconPosition", iconOptions);

  return (
    <FieldGroup name="example" label="Check Me" status={ status }>
      <FieldLabel name="example">Location Input</FieldLabel>
      <Input name="storybook" type="text" iconPosition={ iconPosition || "left" }>
        <Icon name="location" />
      </Input>
    </FieldGroup>
  );
});

stories.add("FieldGroup with Checkbox children", () => {
  const status = select("status", statusOptions);

  return (
    <FieldGroup name="example" label="Check Me" status={ status }>
      <FieldLabel name="example">Select all that apply:</FieldLabel>
      <Checkbox name="example" label="Check Me" isInline />
      <Checkbox name="example2" label="Check Me 2" isInline />
    </FieldGroup>
  );
});
