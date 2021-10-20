/**
 * @name Tooltip
 *
 * @description
 * An element to display an icon and help text on hover.  See the teamsnap patterns library for more information.
 * https://teamsnap-ui-patterns.netlify.com/patterns/components/tooltip.html
 *
 * @example
 *  <Tooltip type='icon' text="I'm some help text.">
 *   Icon or Text to Render as Child
 *  </Tooltip>
 *
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { getClassName } from '../../utils/helpers';

const propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object,
  testId: PropTypes.string,
  otherProps: PropTypes.object,
};

const Tooltip = (props: PropTypes.InferProps<typeof propTypes>) => {
  const { text, children, type, className, mods, style, testId, otherProps } = props;

  const tooltipClasses = getClassName(className, type && `Tooltip--${type}`, mods);

  return (
    <span
      data-tooltip={text}
      className={tooltipClasses}
      style={style}
      data-testid={testId}
      {...otherProps}
    >
      {children}
    </span>
  );
};

Tooltip.defaultProps = {
  children: null,
  type: null,
  className: 'Tooltip',
  mods: null,
  style: {},
  testId: null,
  otherProps: {},
};

export default Tooltip;
