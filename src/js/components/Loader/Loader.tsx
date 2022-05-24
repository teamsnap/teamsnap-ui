/**
 * @name Loader
 *
 * @description
 *  A loader component that supports different animations such as Spin, Pulse and Jello.  See the teamsnap patterns
 *  library for more information https://teamsnap-ui-patterns.netlify.com/patterns/components/loader.html
 *
 * @example
 *  <Loader type='jello' text='loading' />
 *
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { getClassName } from '../../utils/helpers';

const propTypes = {
  type: PropTypes.oneOf(['jello', 'pulse', 'spin']).isRequired,
  text: PropTypes.string,
  message: PropTypes.string,
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object,
  testId: PropTypes.string,
  otherProps: PropTypes.object,
  size: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
};

const Loader = ({
  type,
  text,
  message,
  className,
  mods,
  style,
  testId,
  otherProps,
  size
}: PropTypes.InferProps<typeof propTypes>) => {
  const renderSpinAnimation = () => <span style={{ ...size }} className="SpinAnimation" />;

  const renderPulseAnimation = () => (
    <span className="PulseAnimation">
      <span style={{ ...size }} className="PulseAnimation-dot" />
      <span style={{ ...size }} className="PulseAnimation-dot" />
      <span style={{ ...size }} className="PulseAnimation-dot" />
    </span>
  );

  const renderJelloAnimation = () => {
    // These numbers are base on the JelloAnimation container size of 40 as well as the
    // ratio between the container size and the default animation size of 32 which is 0.2
    let width = 32;
    let offset = 4;
    const containerRatio = 0.2;

    if (size) {
      offset = Math.ceil(size?.width / 8);
      width = size?.width;
    }

    const containerSize = (containerRatio * width) + width;

    return (
      <span
        className="JelloAnimation"
        style={{ width: containerSize, height: containerSize }}
      >
        <span
          style={{
            width,
            height: offset,
            bottom: -offset,
          }}
          className="JelloAnimation-shadow"
        />
        <span style={{ ...size }} className="JelloAnimation-box" />
      </span>
    );
  }

  const renderAnimation = (animation) => {
    if (animation === 'jello') {
      return renderJelloAnimation();
    }
    if (animation === 'pulse') {
      return renderPulseAnimation();
    }
    return renderSpinAnimation();
  };

  if (!text && !message) {
    return renderAnimation(type);
  }

  const loaderClasses = getClassName(className, type === 'jello' && 'Loader--jello', mods);

  return (
    <div className={loaderClasses} style={style} data-testid={testId} {...otherProps}>
      <div className="Loader-indicator">
        {renderAnimation(type)}
        {text && <div className="Loader-indicatorText">{text}</div>}
      </div>
      {message && <div className="Loader-message">{message}</div>}
    </div>
  );
};

Loader.defaultProps = {
  text: null,
  message: null,
  className: 'Loader',
  mods: null,
  style: {},
  testId: null,
  otherProps: {},
};

export default Loader;
