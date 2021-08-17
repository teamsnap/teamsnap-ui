/**
 * @name Checkbox
 *
 * @description
 *  A common checkbox component that will render the appropriate styles. This calls the shared components InputControl
 *  with all the appropriate options. See the teamsnap patterns library for more information.
 *    https://teamsnap-ui-patterns.netlify.com/patterns/components/checkbox.html
 *
 * @example
 *  <Checkbox name='example' label='Check Me' isInline />
 *
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { InputControl } from '../InputControl';
import { CheckboxStates } from '../../types';

const propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.node.isRequired,
  inputProps: PropTypes.any,
  isInline: PropTypes.bool,
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object,
  otherProps: PropTypes.object,
};

type Props = PropTypes.InferProps<typeof propTypes>;

const Checkbox = ({ mods, inputProps, ...props }: Props) => {
  const modClasses = `${mods}${
    inputProps.checked === CheckboxStates.INDETERMINATE ? ' Checkbox--indeterminate' : ''
  }`;

  return <InputControl type="checkbox" inputProps={inputProps} mods={modClasses} {...props} />;
};

Checkbox.defaultProps = {
  inputProps: {},
  isInline: false,
  className: 'Checkbox',
  mods: null,
  style: {},
  otherProps: {},
};

export default Checkbox;
