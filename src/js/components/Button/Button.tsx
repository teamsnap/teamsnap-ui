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
  size: PropTypes.oneOf(["small", "large", "huge"]),
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
  const renderIcon = (icon, mods) =>
    icon ? <Icon name={icon} mods={mods} /> : null;

  const cname = getClassName(
    className,
    color && `Button--${color}`,
    size && `Button--${size}`,
    isActive && "is-active",
    mods
  );

  let modifier = null;
  const hasChildren = label != null || children != null;
  if (iconPosition === "left" && hasChildren) modifier = "u-spaceRightXs";
  if (iconPosition === "right" && hasChildren) modifier = "u-spaceLeftXs";

  return (
    <button
      type={type as "button" | "reset"}
      className={cname}
      style={style}
      onClick={onClick}
      disabled={isDisabled}
      {...otherProps}
    >
      <span>
        {iconPosition === "left" && renderIcon(icon, modifier)}
        {label || children}
        {iconPosition === "right" && renderIcon(icon, modifier)}
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
