/**
 * @name FieldMessage
 *
 * @description
 *  A field message component is used to render a message or error-message. See the teamsnap patterns
 *  library for more information. https://teamsnap-ui-patterns.netlify.com/patterns/components/field-group.html
 *
 * @example
 *  <FieldMessage isError>Test Field Message Error</FieldMessage>
 *
 */

import * as React from "react";
import * as PropTypes from "prop-types";
import { getClassName } from "../../utils/helpers";

class FieldMessage extends React.PureComponent<any, any> {
  static propTypes = {
    children: PropTypes.string,
    isError: PropTypes.bool,
    className: PropTypes.string,
    mods: PropTypes.string,
    style: PropTypes.object,
    otherProps: PropTypes.object
  };

  static defaultProps = {
    children: null,
    isError: false,
    className: "FieldGroup-message",
    mods: null,
    style: {},
    otherProps: {}
  };

  render() {
    const {
      children,
      isError,
      className,
      mods,
      style,
      otherProps
    } = this.props;

    const messageClasses = getClassName(
      isError ? "FieldGroup-message FieldGroup-message--error" : className,
      mods
    );

    return (
      <div className={messageClasses} style={style} {...otherProps}>
        {children}
      </div>
    );
  }
}

export default FieldMessage;
