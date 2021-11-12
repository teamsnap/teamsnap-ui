/**
 * @name Button
 *
 * @description
 *  A common button component that will render the appropriate styles for a button or link.  See the teamsnap patterns
 *  library for more information https://teamsnap-ui-patterns.netlify.com/patterns/components/button.html
 *
 * @example
 *  <Button
 *    handleClick={ () => console.warn('Clicky Clicky') }
 *    color='primary'
 *    size='small'
 *    isDisabled
 *    mods='u-spaceTopMd'>
 *    Click Me
 *  </Button>
 *
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Icon } from '../Icon';
import { getClassName } from '../../utils/helpers';
import { Size } from '../../types';
import { ScreenReader } from '../ScreenReader';

const propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'link', 'text']),
  children: PropTypes.node,
  icon: PropTypes.string,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
  isActive: PropTypes.bool,
  color: PropTypes.string,
  size: Size.PropType,
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object,
  testId: PropTypes.string,
  otherProps: PropTypes.object,
};

type Props = PropTypes.InferProps<typeof propTypes>;

const Button = ({
  className,
  color,
  size,
  isActive,
  mods,
  children,
  icon,
  iconPosition,
  type,
  isDisabled,
  onClick,
  style,
  testId,
  otherProps,
}: Props) => {
  const cname = getClassName(
    className,
    color && `Button--${color}`,
    size && `Button--${size}`,
    isActive && 'is-active',
    type === 'link' && 'Button--text',
    type === 'text' && 'Button--text',
    mods
  );

  let modifier = null;

  const hasVisibleChildren =
    children != null &&
    (Array.isArray(children) ||
    (children as PropTypes.ReactElementLike).type !== ScreenReader);

  if (iconPosition === 'left' && hasVisibleChildren) modifier = 'u-spaceRightXs';
  if (iconPosition === 'right' && hasVisibleChildren) modifier = 'u-spaceLeftXs';
  const maybeIcon = icon ? <Icon name={icon} mods={modifier} /> : null;

  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      className={cname}
      style={style}
      onClick={onClick}
      disabled={isDisabled}
      data-testid={testId}
      {...otherProps}
    >
      <span>
        {iconPosition === 'left' && maybeIcon}
        {children}
        {iconPosition === 'right' && maybeIcon}
      </span>
    </button>
  );
};

Button.propTypes = propTypes;

Button.defaultProps = {
  type: 'button',
  children: null,
  icon: null,
  iconPosition: 'left',
  onClick: null,
  isDisabled: false,
  isActive: false,
  color: null,
  size: null,
  className: 'Button',
  mods: null,
  style: {},
  testId: null,
  otherProps: {},
};

export default Button;
