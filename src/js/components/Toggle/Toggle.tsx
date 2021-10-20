/**
 * @name Toggle
 *
 * @description
 * A controlled input element to toggle a boolean state. This calls the shared components InputControl with all the
 * appropriate options. See the teamsnap patterns library for more information.
 * https://teamsnap-ui-patterns.netlify.com/patterns/components/toggle.html
 *
 * @example
 *  <Toggle
 *    name='OfflinePayments' />
 *
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { InputControl } from '../InputControl';

const propTypes = {
  name: PropTypes.string.isRequired,
  inputProps: PropTypes.object,
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object,
  testId: PropTypes.string,
  otherProps: PropTypes.object,
};

const Toggle = (props: PropTypes.InferProps<typeof propTypes>) => {
  const { name, inputProps, className, mods, style, testId, otherProps } = props;

  return (
    <InputControl
      name={name}
      className={className}
      mods={mods}
      style={style}
      type="checkbox"
      labelProps={{ className: 'Toggle-label' }}
      inputProps={{ className: 'Toggle-input', ...inputProps }}
      testId={testId}
      {...otherProps}
    />
  );
};

Toggle.defaultProps = {
  inputProps: {},
  className: 'Toggle',
  mods: null,
  style: {},
  testId: null,
  otherProps: {},
};

export default Toggle;
