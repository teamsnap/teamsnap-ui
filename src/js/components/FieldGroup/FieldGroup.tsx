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

import * as React from "react";
import * as PropTypes from "prop-types";
import { Icon } from "../Icon";
import { getClassName } from "../../utils/helpers";
import { Status, Statuses } from "../../types";

class FieldGroup extends React.PureComponent<PropTypes.InferProps<typeof FieldGroup.propTypes>, any> {
  static propTypes = {
    children: PropTypes.node.isRequired,
    status: PropTypes.oneOf([null, "success", "error"]),
    className: PropTypes.string,
    mods: PropTypes.string,
    style: PropTypes.object,
    otherProps: PropTypes.object,
    isDisabled: PropTypes.bool,
  };

  static defaultProps = {
    status: null,
    className: "FieldGroup",
    mods: null,
    style: {},
    otherProps: {}
  };

  render() {
    const { children, status, className, mods, style, otherProps, isDisabled } = this.props;

    const fieldClasses = getClassName(
      className,
      status === Statuses.ERROR && "is-notValid",
      status === Statuses.SUCCESS && "is-valid",
      status === Statuses.WARNING && "is-warning",
      isDisabled && "is-disabled",
      mods
    );

    return (
      <div className={fieldClasses} style={style} {...otherProps}>
        {children}
      </div>
    );
  }
}

export default FieldGroup;
