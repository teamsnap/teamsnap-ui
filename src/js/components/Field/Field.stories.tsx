import * as React from "react";
import { storiesOf } from "@storybook/react";
import { select, text, boolean } from "@storybook/addon-knobs/react";
import Field from "./Field";
import { Icon } from "../Icon";
import { Sizes } from "../../types";

const stories = storiesOf("Field", module);

const statusOptions = {
  success: "success",
  error: "error",
  warning: "warning",
  default: null,
};

const sizeOptions = {
  small: "small",
  large: "large",
  default: null,
};

stories.add("Default", () => {
  const status = select("status", statusOptions);
  const placeholder = text("Placeholder", "Input Placeholder");
  const size = select("size", sizeOptions);
  const disabled = boolean('Disabled', false);

  return (
    <Field
      isDisabled={disabled}
      name="Sample"
      placeholder={placeholder}
      size={size}
      status={status}
    />
  );
});

stories.add("With Labels", () => {
  const status = select("status", statusOptions);
  const placeholder = text("Placeholder", "Input Placeholder");
  const size = select("size", sizeOptions);
  const label = text("Label", "First Name");
  const disabled = boolean('Disabled', false);

  return (
    <Field
      isDisabled={disabled}
      label={label}
      name="Sample"
      placeholder={placeholder}
      size={size}
      status={status}
    />
  );
});

stories.add("Captions", () => {
  const status = select("status", statusOptions);
  const placeholder = text("Placeholder", "sample@teamsnap.com");
  const caption = text(
    "Captions",
    "This is the primary email address that we will use to contact you."
  );
  const disabled = boolean('Disabled', false);

  return (
    <>
      <h4>
        Captions can be added to explain how the entered data is used, why is
        required, or similar.
      </h4>
      <br />
      <Field
        caption={caption}
        isDisabled={disabled}
        label="Primary Email Address"
        leftIcon={<Icon name="home" />}
        name="Sample"
        placeholder={placeholder}
        status={status}
      />
    </>
  );
});

stories.add("Sizes", () => {
  const status = select("status", statusOptions);
  const placeholder = text("Placeholder", "Input Placeholder");
  const disabled = boolean('Disabled', false);

  return (
    <>
      <h4>
        Inputs match their container's width, but height, font size and more can
        be controlled via the Size property.
      </h4>
      <br />
      <Field
        caption="This input is small"
        isDisabled={disabled}
        label="Sizes.SMALL or 'small'"
        leftIcon={<Icon name="home" />}
        name="Sample"
        placeholder={placeholder}
        size={Sizes.SMALL}
        status={status}
      />
      <Field
        caption="This input is default"
        isDisabled={disabled}
        label="No size provided (default/medium)"
        leftIcon={<Icon name="home" />}
        name="Sample2"
        placeholder={placeholder}
        status={status}
      />
      <Field
        caption="This input is large"
        isDisabled={disabled}
        label="Sizes.LARGE or 'large'"
        leftIcon={<Icon name="home" />}
        name="Sample3"
        placeholder={placeholder}
        size={Sizes.LARGE}
        status={status}
      />
    </>
  );
});

stories.add("Field with Icons", () => {
  const status = select("status", statusOptions);
  const placeholder = text("Placeholder", "Input Placeholder");
  const size = select("size", sizeOptions);
  const disabled = boolean('Disabled', false);

  return (
    <Field
      caption="This input is..."
      isDisabled={disabled}
      label="This is a sample input"
      leftIcon={<Icon name="home" />}
      name="Sample"
      placeholder={placeholder}
      rightIcon={<Icon name="search" />}
      size={size}
      status={status}
    />
  );
});

stories.add("Status Icons", () => {
  const status = select("status", statusOptions);
  const placeholder = text("Placeholder", "Input Placeholder");
  const size = select("size", sizeOptions);
  const disabled = boolean('Disabled', false);

  return (
    <Field
      caption="This input is..."
      isDisabled={disabled}
      label="This is a sample input"
      leftIcon={<Icon name="home" />}
      name="Sample"
      placeholder={placeholder}
      rightIcon={<Icon name="search" />}
      showStatus
      size={size}
      status={status}
    />
  );
});

stories.add("Clear Icon", () => {
  const status = select("status", statusOptions);
  const placeholder = text("Placeholder", "Input Placeholder");
  const size = select("size", sizeOptions);
  const disabled = boolean('Disabled', false);

  const [value, setValue] = React.useState("");
  return (
    <>
    <h4>
      Providing an onClearClicked callback and `showClear` allows you to wire up whatever form management logic you have.
      Generally, you'll want to clear the value when the clear icon is clicked, but the implementation is entirely in your control.
    </h4>
    <br/>
    <Field
      caption="This input clears when the right-most icon is clicked."
      inputProps={{ value: value, onChange: (e) => setValue(e.target.value) }}
      isDisabled={disabled}
      label="Clearable Input"
      leftIcon={<Icon name="home" />}
      name="Sample"
      placeholder={placeholder}
      rightIcon={<Icon name="search" />}
      showClear
      size={size}
      status={status}
      onClearClicked={() => {
        setValue("");
      }}
    />
    </>
  );
});
