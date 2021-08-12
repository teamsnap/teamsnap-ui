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
  otherProps: PropTypes.object,
};

const Loader = (props: PropTypes.InferProps<typeof propTypes>) => {
  const renderSpinAnimation = () => <span className="SpinAnimation" />;

  const renderPulseAnimation = () => (
    <span className="PulseAnimation">
      <span className="PulseAnimation-dot" />
      <span className="PulseAnimation-dot" />
      <span className="PulseAnimation-dot" />
    </span>
  );

  const renderJelloAnimation = () => (
    <span className="JelloAnimation">
      <span className="JelloAnimation-shadow" />
      <span className="JelloAnimation-box" />
    </span>
  );

  const renderAnimation = (type) => {
    if (type === 'jello') {
      return renderJelloAnimation();
    }
    if (type === 'pulse') {
      return renderPulseAnimation();
    }
    return renderSpinAnimation();
  };

  const { type, text, message, className, mods, style, otherProps } = props;

  if (!text && !message) {
    return renderAnimation(type);
  }

  const loaderClasses = getClassName(className, type === 'jello' && 'Loader--jello', mods);

  return (
    <div className={loaderClasses} style={style} {...otherProps}>
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
  otherProps: {},
};

export default Loader;
