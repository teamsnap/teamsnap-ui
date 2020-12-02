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
import { Icon } from "../Icon";
import { getClassName } from "../../utils/helpers";
import { FieldGroup } from "../FieldGroup";
import { FieldLabel } from "../FieldLabel";
import { FieldMessage } from "../FieldMessage";
import { Input } from "../Input";

const fieldPropTypes = {
  type: PropTypes.oneOf(["toggle", "select", "input"]).isRequired,
  name: PropTypes.string.isRequired,
  inputProps: PropTypes.any,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  caption: PropTypes.string,
  icons: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      position: PropTypes.oneOf(["left", "right"]),
    })
  ),
  status: PropTypes.oneOf(["error", "success"]),
  ref: PropTypes.any,
  otherProps: PropTypes.any,
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
  icons,
  ref,
  status,
  placeholder,
  ...otherProps
}) => {
  return (
    <FieldGroup status={status}>
      {label && <FieldLabel name={name}>{label}</FieldLabel>}
      <Input placeholder={placeholder} name={name} type="text" leftIcon={<Icon name="location" />}>
        {/* Whoa this is funky */}
        {/* <Icon name="location" /> */}
      </Input>
      {status === "error" && <FieldMessage isError>TODO</FieldMessage>}
      {caption && status !== "error" && <FieldMessage>{caption}</FieldMessage>}
    </FieldGroup>
  );
};

Field.defaultProps = {};

export default Field;
