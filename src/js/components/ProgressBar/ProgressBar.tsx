/**
 * @name ProgressBar
 *
 * @description
 *  A progress bar component that will render the appropriate styles for displaying progress by a width percent.  See
 *  the teamsnap patterns library for more information https://teamsnap-ui-patterns.netlify.com/patterns/components/progress-bar.html
 *
 * @example
 * <ProgressBar
 *   title='Percentage Paid'
 *   type='negative'
 *   size='small'
 *   width='40%' />
 *
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';

import { DIRECTION, PRECISION, SIZE, VARIANT } from './constants';
import { getClassName } from '../../utils/helpers';

const propTypes = {
  progress: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  size: PropTypes.oneOf(Object.values(SIZE)),
  variant: PropTypes.oneOf(Object.values(VARIANT)),
  direction: PropTypes.oneOf(Object.values(DIRECTION)),
  precision: PropTypes.oneOf(Object.values(PRECISION)),
  otherProps: PropTypes.object,
};

type Props = PropTypes.InferProps<typeof propTypes>;

const ProgressBar = ({
  progress,
  className,
  style,
  color,
  size,
  variant,
  direction,
  precision,
  otherProps,
}: Props) => {
  const progressClasses = getClassName(
    className,
    size && `ProgressBar--size-${size}`,
    variant && `ProgressBar--variant-${variant}`,
    direction && `ProgressBar--direction-${direction}`,
    precision && `ProgressBar--precision-${precision}`
  );

  const statusStyle = {
    backgroundColor: color,
    [direction === ProgressBar.DIRECTION.VERTICAL ? 'height' : 'width']: `${progress}%`,
  };

  return (
    <div className={progressClasses} style={style} {...otherProps}>
      <div className="ProgressBar-status" style={statusStyle} />
    </div>
  );
};

ProgressBar.SIZE = SIZE;
ProgressBar.VARIANT = VARIANT;
ProgressBar.DIRECTION = DIRECTION;
ProgressBar.PRECISION = PRECISION;

ProgressBar.defaultProps = {
  progress: 0,
  className: 'ProgressBar',
  style: {},
  color: null,
  size: ProgressBar.SIZE.DEFAULT,
  variant: null,
  direction: DIRECTION.HORIZONTAL,
  precision: PRECISION.APPROXIMATE,
  otherProps: {},
};

export default ProgressBar;
