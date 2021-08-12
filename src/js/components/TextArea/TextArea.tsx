/**
 * @name TextArea
 *
 * @description
 * A generic wrapper component for the native textarea html element.
 *
 * @example
 *  <TextArea
 *    name='BatchInvoiceDescription' />
 *
 */
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { getClassName } from '../../utils/helpers';

const propTypes = {
  name: PropTypes.string.isRequired,
  inputProps: PropTypes.object,
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object,
  otherProps: PropTypes.object,
};

const TextArea = (props: PropTypes.InferProps<typeof propTypes>) => {
  const { name, inputProps, className, mods, style, otherProps } = props;

  return (
    <div className={getClassName(className, mods)} style={style} {...otherProps}>
      <textarea name={name} id={name} {...inputProps} />
    </div>
  );
};
TextArea.defaultProps = {
  inputProps: {},
  className: '',
  mods: null,
  style: {},
  otherProps: {},
};

export default TextArea;
