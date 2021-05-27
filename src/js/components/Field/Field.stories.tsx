import * as React from "react";
import { storiesOf } from "@storybook/react";
import { select, text, boolean } from "@storybook/addon-knobs/react";
import Field from "./Field";
import { Icon } from "../Icon";
import { Sizes, CheckboxStates } from "../../types";

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
      formFieldProps={{
        placeholder: placeholder,
        size: size,
      }}
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
      formFieldProps={{
        placeholder: placeholder,
        size: size
      }}
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
        formFieldProps={{
          leftIcon: <Icon name="home" />,
          placeholder: placeholder
        }}
        name="Sample"
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
        formFieldProps={{
          leftIcon: <Icon name="home" />,
          placeholder: placeholder,
          size: Sizes.SMALL
        }}
        name="Sample"
        status={status}
      />
      <Field
        caption="This input is default"
        isDisabled={disabled}
        label="No size provided (default/medium)"
        formFieldProps={{
          leftIcon: <Icon name="home" />,
          placeholder: placeholder,
        }}
        name="Sample2"
        status={status}
      />
      <Field
        caption="This input is large"
        isDisabled={disabled}
        label="Sizes.LARGE or 'large'"
        formFieldProps={{
          leftIcon: <Icon name="home" />,
          placeholder: placeholder,
          size: Sizes.LARGE
        }}
        name="Sample3"
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
      formFieldProps={{
        rightIcon: <Icon name="search" />,
        placeholder: placeholder,
        size: size
      }}
      name="Sample"
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
      formFieldProps={{
        leftIcon: <Icon name="home" />,
        rightIcon: <Icon name="search" />,
        placeholder: placeholder,
        showStatus: true,
        size: size,
      }}
      name="Sample"
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
      formFieldProps={{
        leftIcon: <Icon name="home" />,
        rightIcon: <Icon name="search" />,
        placeholder: placeholder,
        size: size,
        showClear: true,
        onClearClicked: () => {
          setValue("");
        }
      }}
      name="Sample"
      status={status}
    />
    </>
  );
});


stories.add("Checkbox", () => {
  const status = select("status", statusOptions);
  const disabled = boolean('Disabled', false);

  const [value, setValue] = React.useState(false);
  return (
    <>
      <br/>
      <Field
        caption="By accepting the terms of service, you agree to be a friendly human!"
        isDisabled={disabled}
        type="checkbox"
        label="Accept Terms of Service"
        formFieldProps={{
          text: "Click me!",
          checked: value,
          onClick: () => {
            setValue(!value);
          },
        }}
        name="Sample"
        status={status}
      />
    </>
  );
});

stories.add("Multiple Checkboxes", () => {
  const [dogs, setDogs] = React.useState(false);
  const [cats, setCats] = React.useState(false);
  return (
    <>
      <h4>This example omits the label and caption on the field components, instead opting to work with those manually.</h4>
      <br/>
      <Field.Label>Cats/Dogs/Both?</Field.Label>
      <Field
        isInline
        style={{marginRight: "12px"}}
        type="checkbox"
        formFieldProps={{
          text: "Cats",
          checked: cats,
          onClick: () => {
            setCats(!cats);
          },
        }}
        name="Cats"
      />
      <Field
        isInline
        type="checkbox"
        formFieldProps={{
          text: "Dogs",
          checked: dogs,
          onClick: () => {
            setDogs(!dogs);
          },
        }}
        name="Dogs"
      />
      <Field.Caption>This determines if you'll see cat gifs, dog gifs, or both.</Field.Caption>
    </>
  )
});

stories.add("Indeterminate Checkbox", () => {
  const status = select("status", statusOptions);
  const disabled = boolean('Disabled', false);

  const [state, setState] = React.useState(CheckboxStates.FALSE);

  return (
    <>
      <h4>
        Checkboxes can have an indeterminate status. It's up to you to determine how this is managed
        and what can cause an indeterminate status. This example catches false to true transitions and sets indeterminate instead.
        This often can feel more complicated than it actually is. Please refer to the storybook source code for an example on
        how to emulate this functionality.
      </h4>
      <br/>
      <Field
        caption="By accepting the terms of service, you agree to be a friendly human!"
        isDisabled={disabled}
        label="Accept Terms of Service"
        name="Sample"
        status={status}
        type={"checkbox"}
        formFieldProps={{
          text: "Click me!",
          checked: state,
          onClick: () => {
            // TINY little state machine to help model the transitions here.
            switch(state) {
              case CheckboxStates.FALSE:
                setState(CheckboxStates.INDETERMINATE);
                break;
              case CheckboxStates.INDETERMINATE:
                setState(CheckboxStates.TRUE);
                break;
              case CheckboxStates.TRUE:
                setState(CheckboxStates.FALSE);
                break;
            }
          },
        }}
      />
    </>
  );
});