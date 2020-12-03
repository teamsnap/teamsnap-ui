import * as React from "react";
import { storiesOf } from "@storybook/react";
import { select, text } from "@storybook/addon-knobs/react";
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

const iconOptions = {
  left: "left",
  right: "right",
  default: "left",
};

stories.add("Default", () => {
  const status = select("status", statusOptions);
  const placeholder = text("Placeholder", "Input Placeholder");
  const size = select("size", sizeOptions);

  return (
    <Field
      status={status}
      name="Sample"
      placeholder={placeholder}
      size={size}
    />
  );
});

stories.add("With Labels", () => {
  const status = select("status", statusOptions);
  const placeholder = text("Placeholder", "Input Placeholder");
  const size = select("size", sizeOptions);
  const label = text("Label", "First Name");

  return (
    <Field
      status={status}
      name="Sample"
      label={label}
      placeholder={placeholder}
      size={size}
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

  return (
    <>
      <h4>
        Captions can be added to explain how the entered data is used, why is
        required, or similar.
      </h4>
      <br />
      <Field
        status={status}
        name="Sample"
        caption={caption}
        placeholder={placeholder}
        label="Primary Email Address"
        leftIcon={<Icon name="home" />}
      />
    </>
  );
});

stories.add("Sizes", () => {
  const status = select("status", statusOptions);
  const placeholder = text("Placeholder", "Input Placeholder");

  return (
    <>
      <h4>
        Inputs match their container's width, but height, font size and more can
        be controlled via the Size property.
      </h4>
      <br />
      <Field
        status={status}
        name="Sample"
        placeholder={placeholder}
        size={Sizes.SMALL}
        label="Sizes.SMALL or 'small'"
        leftIcon={<Icon name="home" />}
        caption="This input is small"
      />
      <Field
        status={status}
        name="Sample2"
        placeholder={placeholder}
        label="No size provided (default/medium)"
        leftIcon={<Icon name="home" />}
        caption="This input is default"
      />
      <Field
        status={status}
        name="Sample3"
        placeholder={placeholder}
        size={Sizes.LARGE}
        label="Sizes.LARGE or 'large'"
        leftIcon={<Icon name="home" />}
        caption="This input is large"
      />
    </>
  );
});

stories.add("Field with Icons", () => {
  const status = select("status", statusOptions);
  const placeholder = text("Placeholder", "Input Placeholder");
  const size = select("size", sizeOptions);

  return (
    <Field
      status={status}
      name="Sample"
      placeholder={placeholder}
      size={size}
      label="This is a sample input"
      leftIcon={<Icon name="home" />}
      rightIcon={<Icon name="search" />}
      caption="This input is..."
    />
  );
});

stories.add("Status Icons", () => {
  const status = select("status", statusOptions);
  const placeholder = text("Placeholder", "Input Placeholder");
  const size = select("size", sizeOptions);

  return (
    <Field
      status={status}
      name="Sample"
      placeholder={placeholder}
      size={size}
      label="This is a sample input"
      leftIcon={<Icon name="home" />}
      rightIcon={<Icon name="search" />}
      showStatus
      caption="This input is..."
    />
  );
});

stories.add("Clear Icon", () => {
  const status = select("status", statusOptions);
  const placeholder = text("Placeholder", "Input Placeholder");
  const size = select("size", sizeOptions);

  const [value, setValue] = React.useState("");
  return (
    <>
    <h4>
      Providing an onClearClicked callback and `showClear` allows you to wire up whatever form management logic you have.
      Generally, you'll want to clear the value when the clear icon is clicked, but the implementation is entirely in your control.
    </h4>
    <br/>
    <Field
      inputProps={{ value: value, onChange: (e) => setValue(e.target.value) }}
      status={status}
      name="Sample"
      placeholder={placeholder}
      size={size}
      label="Clearable Input"
      leftIcon={<Icon name="home" />}
      rightIcon={<Icon name="search" />}
      showClear
      onClearClicked={() => {
        setValue("");
      }}
      caption="This input clears when the right-most icon is clicked."
    />
    </>
  );
});
