/**
 * @name Divider
 *
 * @description
 *  A divider component is used as a horizontal rule and spacing element to separate content. See the teamsnap patterns
 *  library for more information. https://teamsnap-ui-patterns.netlify.com/patterns/components/divider.html
 *
 * @example
 *  <Divider isThick />
 *
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { getClassName } from '../../utils/helpers';

const propTypes = {
  isIndented: PropTypes.bool,
  isSpaced: PropTypes.bool,
  isThick: PropTypes.bool,
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object,
  otherProps: PropTypes.object,
};

type Props = PropTypes.InferProps<typeof propTypes>;

const Divider = ({ className, isIndented, isSpaced, isThick, mods, style, otherProps }: Props) => {
  const dividerClasses = getClassName(
    className,
    isIndented && 'Divider--indented',
    isSpaced && 'Divider--space',
    isThick && 'Divider--thick',
    mods
  );

  return <hr className={dividerClasses} style={style} {...otherProps} />;
};

Divider.defaultProps = {
  isIndented: false,
  isSpaced: false,
  isThick: false,
  className: 'Divider',
  mods: null,
  style: {},
  otherProps: {},
};

export default Divider;
