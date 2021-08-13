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

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { FieldGroup } from '../FieldGroup';
import { FieldLabel } from '../FieldLabel';
import { FieldMessage } from '../FieldMessage';
import { Input } from '../Input';
import { CheckboxState, CheckboxStates, Status, Size } from '../../types';
import { Checkbox } from '../Checkbox';
import { Radio } from '../Radio';

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
  inputProps: PropTypes.any,
});

const fieldPropTypes = {
  type: PropTypes.oneOf(['toggle', 'select', 'input', 'checkbox', 'date']).isRequired,
  formFieldProps: PropTypes.oneOfType([checkboxShape, inputShape]),
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  caption: PropTypes.string,
  mods: PropTypes.string,
  status: Status.PropType,
  ref: PropTypes.any,
  otherProps: PropTypes.any,
  isDisabled: PropTypes.bool,
  isInline: PropTypes.bool,
  style: PropTypes.any,
};

type FieldProps = PropTypes.InferProps<typeof fieldPropTypes>;

const Field = ({
  type,
  name,
  label,
  caption,
  ref,
  status,
  isDisabled,
  formFieldProps,
  isInline,
  style,
  ...otherProps
}: FieldProps) => {
  return (
    <FieldGroup style={style} isInline={isInline} status={status} isDisabled={isDisabled}>
      {label && <FieldLabel name={name}>{label}</FieldLabel>}
      {((fieldProps) => {
        const {
          text,
          checked,
          onClick,
          leftIcon,
          rightIcon,
          placeholder,
          size,
          showStatus,
          showClear,
          onClearClicked,
          inputProps,
        } = fieldProps as any;

        switch (type) {
          case 'checkbox':
            return (
              <Checkbox
                name={name}
                inputProps={{
                  checked,
                  onClick,
                  disabled: isDisabled,
                }}
                label={text}
                isInline
              />
            );
          case 'radio':
            return (
              <Radio
                name={name}
                inputProps={{
                  checked,
                  onClick,
                  disabled: isDisabled,
                }}
                label={text}
                isInline
              />
            );
          default:
            return (
              <Input
                size={size}
                placeholder={placeholder}
                name={name}
                type={type || 'text'}
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
