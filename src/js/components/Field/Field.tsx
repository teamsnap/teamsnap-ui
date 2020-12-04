/**
 * @name Field
 *
 * @description
 *  A field group component is a wrapper for grouping the input with label and messages.  See the teamsnap patterns
 *  library for more information. https://teamsnap-ui-patterns.netlify.com/patterns/components/field-group.html
 *
 * @example
 *  <FieldGroup name='example' label='Check Me' isInline>
 *    Field Child Data
 *  </FieldGroup>
 *
 */

import * as React from "react";
import * as PropTypes from "prop-types";
import { FieldGroup } from "../FieldGroup";
import { FieldLabel } from "../FieldLabel";
import { FieldMessage } from "../FieldMessage";
import { Input } from "../Input";
import { Status, Size } from "../../types";

const fieldPropTypes = {
  type: PropTypes.oneOf(["toggle", "select", "input"]).isRequired,
  name: PropTypes.string.isRequired,
  inputProps: PropTypes.any,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  caption: PropTypes.string,
  status: Status.PropType,
  ref: PropTypes.any,
  otherProps: PropTypes.any,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  size: Size.PropType,
  showStatus: PropTypes.bool,
  showClear: PropTypes.bool,
  onClearClicked: PropTypes.func,
  isDisabled: PropTypes.bool,
};

type FieldType = React.FunctionComponent<
  PropTypes.InferProps<typeof fieldPropTypes>
>;

const Field: FieldType = ({
  type,
  name,
  inputProps,
  label,
  caption,
  leftIcon,
  rightIcon,
  ref,
  status,
  placeholder,
  size,
  showStatus,
  showClear,
  onClearClicked,
  isDisabled,
  ...otherProps
}) => {
  return (
    <FieldGroup status={status}>
      {label && <FieldLabel name={name}>{label}</FieldLabel>}
      <Input
        mods={size ? `Input--${size}` : null}
        size={size}
        placeholder={placeholder}
        name={name}
        type="text"
        inputProps={inputProps}
        status={status}
        rightIcon={rightIcon}
        leftIcon={leftIcon}
        showStatus={showStatus}
        showClear={showClear}
        onClearClicked={onClearClicked}
        isDisabled={isDisabled}
        {...otherProps}
      />
      {caption && <FieldMessage status={status}>{caption}</FieldMessage>}
    </FieldGroup>
  );
};

Field.defaultProps = {};

export default Field;
