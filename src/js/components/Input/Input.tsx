/**
 * @name Input
 *
 * @description
 *  A common input component that will render the appropriate styles.  This currently wraps the 'InputGroup' and 'Input'
 *  styles together.  See the teamsnap patterns library for more inforamtion.
 *    https://teamsnap-ui-patterns.netlify.com/patterns/components/input-group.html
 *    https://teamsnap-ui-patterns.netlify.com/patterns/components/input
 *
 * @example
 *  <Input name='example' type='email' />
 *
 */

import * as React from "react";
import * as PropTypes from "prop-types";
import { getClassName } from "../../utils/helpers";

class Input extends React.PureComponent<PropTypes.InferProps<typeof Input.propTypes>, any> {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    iconPosition: PropTypes.oneOf([null, "left", "right"]),
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    inputProps: PropTypes.object,
    mods: PropTypes.string,
    name: PropTypes.string.isRequired,
    otherProps: PropTypes.object,
    placeholder: PropTypes.string,
    style: PropTypes.object,
    type: PropTypes.string,
  };

  static defaultProps = {
    children: null,
    className: "InputGroup",
    iconPosition: null,
    inputProps: {},
    mods: null,
    otherProps: {},
    placeholder: "",
    style: {},
    type: "text",
  };

  render() {
    const {
      children,
      className,
      iconPosition,
      inputProps,
      leftIcon,
      mods,
      name,
      otherProps,
      placeholder,
      rightIcon,
      style,
      type,
    } = this.props;

    const inputClasses = getClassName(
      className,
      leftIcon && `InputGroup--leftIcon`,
      rightIcon && `InputGroup--rightIcon`,
      mods
    );

    return (
      <div className={inputClasses} style={style} {...otherProps}>
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          className="Input"
          {...inputProps}
        />
        {leftIcon && <span className="InputGroup-icon">{leftIcon}</span>}
      </div>
    );
  }
}

export default Input;
