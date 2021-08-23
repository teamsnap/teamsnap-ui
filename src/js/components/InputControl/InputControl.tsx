/**
 * @name InputControl
 *
 * @description
 *  The InputControl component is used internally to render Checkbox, Radio and Toggles.  The Checkbox, Radio and
 *  Toggle components should be used instead.  See <Radio />, <Checkbox /> or <Toggle /> for more information.
 *
 * @example
 *  <InputControl name='example' type='radio' label='Check Me' isInline />
 *
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { getClassName } from '../../utils/helpers';
import { CheckboxStates } from '../../types';

const propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.node,
  group: PropTypes.string,
  inputProps: PropTypes.any,
  labelProps: PropTypes.object,
  isInline: PropTypes.bool,
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object,
  otherProps: PropTypes.object,
};

const InputControl = ({
  name,
  label,
  group,
  type,
  inputProps,
  labelProps,
  isInline,
  className,
  mods,
  style,
  otherProps,
  ...rest
}: PropTypes.InferProps<typeof propTypes>) => {
  const classes = getClassName(className, isInline && 'Checkbox--inline', mods);

  // booleans can skip the extra checking here
  // handle checkboxstates as a valid input
  let value;
  if (inputProps.checked !== undefined) {
    if (typeof inputProps.checked === 'boolean') {
      value = inputProps.checked;
    } else if (inputProps.checked === CheckboxStates.INDETERMINATE) {
      value = true;
    } else {
      value = inputProps.checked === 'true';
    }
  }

  return (
    <div className={classes} style={style} {...otherProps} {...rest}>
      <input
        className="Checkbox-input"
        type={type}
        name={group || name}
        data-testid={`${name}-input`}
        id={name}
        {...inputProps}
        checked={value} // has to come after spreading input props to support indeterminate
      />
      <label className="Checkbox-label" htmlFor={name} {...labelProps}>
        {label}
      </label>
    </div>
  );
};

InputControl.defaultProps = {
  label: null,
  group: null,
  inputProps: {},
  labelProps: {},
  isInline: false,
  className: null,
  mods: null,
  style: {},
  otherProps: {},
};

export default InputControl;
