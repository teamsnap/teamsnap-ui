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
import { Icon } from "../Icon";
import { Size, Status } from "../../types";

const statusToColor = {
  "warning": "u-colorWarning",
  "error": "u-colorNegative",
  "success": "u-colorPositive",
};

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: Size.PropType,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  inputProps: PropTypes.object,
  mods: PropTypes.string,
  name: PropTypes.string.isRequired,
  otherProps: PropTypes.object,
  placeholder: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.string,
  showStatus: PropTypes.bool,
  showClear: PropTypes.bool,
  onClearClicked: PropTypes.func,
  status: Status.PropType,
  isDisabled: PropTypes.bool,
};

type InputType = React.FunctionComponent<PropTypes.InferProps<typeof propTypes>>;

const Input: InputType = ({
  className,
  inputProps,
  leftIcon,
  mods,
  name,
  otherProps,
  placeholder,
  rightIcon,
  style,
  type,
  size,
  showStatus,
  showClear,
  onClearClicked,
  status,
  isDisabled
}) => {
  const inputClasses = getClassName(
    className,
    leftIcon && `InputGroup--leftIcon`,
    rightIcon && `InputGroup--rightIcon`,
    (showStatus || showClear) && "InputGroup--auxIcon",
    'u-flex',
    mods
  );

  return (
    <div className={inputClasses} style={style} {...otherProps}>
      {leftIcon && <div className="icon-Left InputGroup-icon">{leftIcon}</div>}
      <div className="u-sizeFill">
        <input
          disabled={isDisabled}
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          className={`Input ${size && `Input--${size}`} ${isDisabled && `Input--isDisabled`}`}
          {...inputProps}
        />
      </div>
      {rightIcon && <div className="icon-Right InputGroup-icon">{rightIcon}</div>}
      {(showStatus || showClear) && <div className="icon-Aux InputGroup-icon">
        {showStatus && !showClear && <span className={statusToColor[status]}><Icon name="info"/></span>}
        {showClear && <span className={statusToColor[status]} onClick={onClearClicked}><Icon name="info" /></span>}
        </div>}
    </div>
  );
}

Input.defaultProps = {
  children: null,
  className: "InputGroup",
  inputProps: {},
  mods: null,
  otherProps: {},
  placeholder: "",
  style: {},
  type: "text",
};

export default Input;
