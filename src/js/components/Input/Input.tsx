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

class Input extends React.PureComponent<any, any> {
  static propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    children: PropTypes.node,
    inputProps: PropTypes.object,
    iconPosition: PropTypes.oneOf([null, "left", "right"]),
    className: PropTypes.string,
    mods: PropTypes.string,
    style: PropTypes.object,
    otherProps: PropTypes.object
  };

  static defaultProps = {
    type: "text",
    children: null,
    inputProps: {},
    iconPosition: null,
    className: "InputGroup",
    mods: null,
    style: {},
    otherProps: {}
  };

  render() {
    const {
      name,
      children,
      type,
      inputProps,
      iconPosition,
      className,
      mods,
      style,
      otherProps
    } = this.props;

    const inputClasses = getClassName(
      className,
      children && iconPosition && `InputGroup--${iconPosition}Icon`,
      mods
    );

    return (
      <div className={inputClasses} style={style} {...otherProps}>
        <input
          id={name}
          name={name}
          type={type}
          className="Input"
          {...inputProps}
        />
        {children && <span className="InputGroup-icon">{children}</span>}
      </div>
    );
  }
}

export default Input;
