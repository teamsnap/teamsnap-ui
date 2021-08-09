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
import { getClassName } from '../../utils/helpers';

type AnimationTypes = 'jello' | 'pulse' | 'spin';

export interface Props {
  type: AnimationTypes;
  text?: string;
  message?: string;
  className?: string;
  mods?: string;
  style?: object;
}

const Loader: React.FC<Props> = ({
  type = 'spin',
  text,
  message,
  className = 'Loader',
  mods = null,
  style = {},
}: Props) => {
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

  const renderAnimation = (animationType: string) => {
    if (animationType === 'jello') {
      return renderJelloAnimation();
    }

    if (animationType === 'pulse') {
      return renderPulseAnimation();
    }

    if (animationType === 'spin') {
      return renderSpinAnimation();
    }

    return renderSpinAnimation();
  };

  if (!text && !message) {
    return renderAnimation(type);
  }

  const loaderClasses = getClassName(className, type === 'jello' && 'Loader--jello', mods);

  return (
    <div className={loaderClasses} style={style}>
      <div className="Loader-indicator">
        {renderAnimation(type)}
        {text && <div className="Loader-indicatorText">{text}</div>}
      </div>
      {message && <div className="Loader-message">{message}</div>}
    </div>
  );
};

export default Loader;
