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

import * as React from "react";
import * as PropTypes from "prop-types";
import { Icon } from "../Icon";
import { getClassName } from "../../utils/helpers";
import { Size } from "../../types";

const propTypes = {
  type: PropTypes.oneOf(["button", "submit", "link"]),
  label: PropTypes.string,
  children: PropTypes.node,
  icon: PropTypes.string,
  iconPosition: PropTypes.oneOf(["left", "right"]),
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
  isActive: PropTypes.bool,
  color: PropTypes.string,
  size: Size.PropType,
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object,
  otherProps: PropTypes.object,
};

const Button: React.FunctionComponent<PropTypes.InferProps<typeof propTypes>> = ({
  className,
  color,
  size,
  isActive,
  mods,
  label,
  children,
  icon,
  iconPosition,
  type,
  isDisabled,
  onClick,
  style,
  otherProps,
}) => {
  const cname = getClassName(
    className,
    color && `Button--${color}`,
    size && `Button--${size}`,
    isActive && "is-active",
    type === 'link' && 'Button--text',
    mods
  );

  let modifier = null;
  const hasChildren = label != null || children != null;
  if (iconPosition === "left" && hasChildren) modifier = "u-spaceRightXs";
  if (iconPosition === "right" && hasChildren) modifier = "u-spaceLeftXs";
  const maybeIcon = icon ? <Icon name={icon} mods={modifier} /> : null

  return (
    <button
      type={type === 'link' ? 'button' : type as 'button'}
      className={cname}
      style={style}
      onClick={onClick}
      disabled={isDisabled}
      {...otherProps}
    >
      <span>
        {iconPosition === "left" && maybeIcon}
        {label || children}
        {iconPosition === "right" && maybeIcon}
      </span>
    </button>
  );
};

Button.propTypes = propTypes;

Button.defaultProps = {
  type: "button",
  label: null,
  children: null,
  icon: null,
  iconPosition: "left",
  onClick: null,
  isDisabled: false,
  isActive: false,
  color: null,
  size: null,
  className: "Button",
  mods: null,
  style: {},
  otherProps: {},
};

export default Button;
