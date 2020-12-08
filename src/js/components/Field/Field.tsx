/**
 * @name Field
 *
 * @description
 *  The Field component is used when you're wanting to render any type of form field. It supports labels and captions for all types of fields,
 * and offers detailed levels of support for specific field types. Please refer to the storybook examples to see the many different ways in which
 * you can work with fields.
 *
 * @example
 *  <Field
 *    isDisabled={true}
 *    label={"Email Address"}
 *    name="Sample"
 *    formFieldProps={{
 *      placeholder: "Placeholder Text",
 *      size: Sizes.SMALL
 *    }}
 *    status={Statuses.ERROR}
 *  />
 */

import * as React from "react";
import * as PropTypes from "prop-types";
import { FieldGroup } from "../FieldGroup";
import { FieldLabel } from "../FieldLabel";
import { FieldMessage } from "../FieldMessage";
import { Input } from "../Input";
import { Status, Size } from "../../types";
import { Checkbox } from "../Checkbox";
import { CheckboxState, CheckboxStates } from "../../types";

const checkboxShape = PropTypes.shape({
  text: PropTypes.string,
  checked: CheckboxState.PropType,
  onClick: PropTypes.func,
  isIndeterminate: PropTypes.bool,
});

const inputShape = PropTypes.shape({
  placeholder: PropTypes.string,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  size: Size.PropType,
  showStatus: PropTypes.bool,
  showClear: PropTypes.bool,
  onClearClicked: PropTypes.func,
  rawInputProps: PropTypes.any,
});

const fieldPropTypes = {
  type: PropTypes.oneOf(["toggle", "select", "input", "checkbox"]).isRequired,
  formFieldProps: PropTypes.oneOfType([checkboxShape, inputShape]),
  name: PropTypes.string.isRequired,
  inputProps: PropTypes.any,
  label: PropTypes.string,
  caption: PropTypes.string,
  status: Status.PropType,
  ref: PropTypes.any,
  otherProps: PropTypes.any,
  isDisabled: PropTypes.bool,
  isInline: PropTypes.bool,
  style: PropTypes.any,
};

type FieldType = React.FunctionComponent<
  PropTypes.InferProps<typeof fieldPropTypes>
> & {
  CheckboxStates: typeof CheckboxStates;
  Label: typeof React.Component;
  Caption: typeof React.Component;
};

const Field: FieldType = ({
  type,
  name,
  inputProps,
  label,
  caption,
  ref,
  status,
  isDisabled,
  formFieldProps,
  isInline,
  style,
  ...otherProps
}) => {
  return (
    <FieldGroup style={style} isInline={isInline} status={status} isDisabled={isDisabled}>
      {label && <FieldLabel name={name}>{label}</FieldLabel>}
      {((formFieldProps) => {
        switch (type) {
          case "checkbox":
            const { text, checked, onClick } = formFieldProps as any;
            return (
              <Checkbox
                name={name}
                inputProps={{
                  checked: checked,
                  onClick: onClick,
                  disabled: isDisabled,
                }}
                label={text}
                isInline
              />
            );
          default:
            const {
              leftIcon,
              rightIcon,
              placeholder,
              size,
              showStatus,
              showClear,
              onClearClicked,
              rawInputProps,
            } = formFieldProps as any;
            return (
              <Input
                size={size}
                placeholder={placeholder}
                name={name}
                type={type || "text"}
                inputProps={rawInputProps}
                status={status}
                rightIcon={rightIcon}
                leftIcon={leftIcon}
                showStatus={showStatus}
                showClear={showClear}
                onClearClicked={onClearClicked}
                isDisabled={isDisabled}
                {...otherProps}
              />
            );
        }
      })(formFieldProps)}
      {caption && <FieldMessage status={status}>{caption}</FieldMessage>}
    </FieldGroup>
  );
};

Field.propTypes = fieldPropTypes;
Field.defaultProps = {};
Field.CheckboxStates = CheckboxStates;
Field.Label = FieldLabel;
Field.Caption = FieldMessage;

export default Field;
