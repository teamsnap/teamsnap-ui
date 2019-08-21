/**
 * @name FieldGroup
 *
 * @description
 *  A field group component is a wrapper for grouping the input with label and messages.  See the teamsnap patterns
 *  library for more information. https://teamsnap-ui-patterns.netlify.com/patterns/components/field-group.html
 *
 * @example
 *  <FieldGroup name='example' label='Check Me' isInline>
 *    Field Child Data
 *  </FieldGroup>
 *
 */

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";
import { getClassName } from "../../utils/helpers";

class FieldGroup extends PureComponent {
  renderSuccess = () => (
    <span className="FieldGroup-validation">
      <Icon name="check" />
    </span>
  );

  render() {
    const { children, status, className, mods, style, otherProps } = this.props;

    const fieldClasses = getClassName(
      className,
      status === "error" && "is-notValid",
      status === "success" && "is-valid",
      mods
    );

    return (
      <div className={ fieldClasses } style={ style } { ...otherProps }>
        { status === "success" && this.renderSuccess() }
        { children }
      </div>
    );
  }
}

FieldGroup.propTypes = {
  children: PropTypes.node.isRequired,
  status: PropTypes.oneOf([null, "success", "error"]),
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object,
  otherProps: PropTypes.object
};

FieldGroup.defaultProps = {
  status: null,
  className: "FieldGroup",
  mods: null,
  style: {},
  otherProps: {}
};

export default FieldGroup;
