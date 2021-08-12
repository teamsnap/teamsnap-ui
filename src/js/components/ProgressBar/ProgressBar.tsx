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

import { getClassName } from '../../utils/helpers';

const propTypes = {
  progress: PropTypes.number,
  size: PropTypes.string,
  color: PropTypes.string,
  isPrecise: PropTypes.bool,
  isVertical: PropTypes.bool,
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object,
  otherProps: PropTypes.object,
};

type Props = PropTypes.InferProps<typeof propTypes>;

const ProgressBar = ({
  progress,
  color,
  size,
  isVertical,
  isPrecise,
  className,
  mods,
  style,
  otherProps,
}: Props) => {
  const progressClasses = getClassName(
    className,
    size && `ProgressBar--${size}`,
    color && `ProgressBar--${color}`,
    isVertical && 'ProgressBar--vertical',
    isPrecise && 'ProgressBar--precise',
    mods
  );

  const progressWidth = {
    [isVertical ? 'height' : 'width']: `${progress}%`,
  };

  return (
    <div className={progressClasses} style={style} {...otherProps}>
      <div className="ProgressBar-status" style={progressWidth} />
    </div>
  );
};

ProgressBar.defaultProps = {
  progress: 0,
  size: null,
  color: null,
  isPrecise: false,
  isVertical: false,
  className: 'ProgressBar',
  mods: null,
  style: {},
  otherProps: {},
};

export default ProgressBar;
