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
import { useSpring, animated } from 'react-spring';

import { getClassName } from '../../utils/helpers';
import { Easing } from '../../utils/easing';

const propTypes = {
  animate: PropTypes.bool.isRequired,
  progress: PropTypes.number.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
  isPrecise: PropTypes.bool.isRequired,
  isVertical: PropTypes.bool.isRequired,
  isSquared: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
  mods: PropTypes.string,
  style: PropTypes.object.isRequired,
  testId: PropTypes.string,
  otherProps: PropTypes.object.isRequired,
};

type Props = PropTypes.InferProps<typeof propTypes>;

const ProgressBar = ({
  animate,
  progress,
  color,
  size,
  isVertical,
  isPrecise,
  isSquared,
  className,
  mods,
  style,
  testId,
  otherProps,
}: Props) => {
  const springConfig = {
    from: {
      width: '0%',
    },
    to: {
      width: `${progress}%`,
    },
    delay: 200,
    config: {
      duration: 800,
      easing: Easing.easeInOut,
    },
  };

  const animation = useSpring(springConfig);

  const progressClasses = getClassName(
    className,
    size && `ProgressBar--${size}`,
    color && `ProgressBar--${color}`,
    isVertical && 'ProgressBar--vertical',
    isPrecise && 'ProgressBar--precise',
    isSquared && 'ProgressBar--squared',
    mods
  );

  const propertyKey = isVertical ? 'height' : 'width';

  return (
    <div className={progressClasses} style={style} data-testid={testId} {...otherProps}>
      {animate ? (
        <animated.div className="ProgressBar-status" style={{ [propertyKey]: animation.width }} />
      ) : (
        <div className="ProgressBar-status" style={{ [propertyKey]: `${progress}%` }} />
      )}
    </div>
  );
};

ProgressBar.defaultProps = {
  animate: false,
  progress: 0,
  isPrecise: false,
  isVertical: false,
  isSquared: false,
  className: 'ProgressBar',
  style: {},
  otherProps: {},
};

export default ProgressBar;
