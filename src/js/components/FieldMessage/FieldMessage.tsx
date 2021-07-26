/**
 * @name FieldMessage
 *
 * @description
 *  A field message component is used to render a message or error-message. See the teamsnap patterns
 *  library for more information. https://teamsnap-ui-patterns.netlify.com/patterns/components/field-group.html
 *
 * @example
 *  <FieldMessage status={Status.ERROR}>Test Field Message Error</FieldMessage>
 *
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { getClassName } from '../../utils/helpers';
import { Status, Statuses } from '../../types';

class FieldMessage extends React.PureComponent<
  PropTypes.InferProps<typeof FieldMessage.propTypes>,
  any
> {
  static propTypes = {
    children: PropTypes.string,
    isError: PropTypes.bool,
    className: PropTypes.string,
    mods: PropTypes.string,
    style: PropTypes.object,
    otherProps: PropTypes.object,
    status: Status.PropType,
  };

  static defaultProps = {
    children: null,
    className: 'FieldGroup-message',
    mods: null,
    style: {},
    otherProps: {},
  };

  render() {
    const { children, className, mods, style, otherProps, status } = this.props;

    const messageClasses = getClassName(
      'FieldGroup-message',
      status == Statuses.ERROR && 'FieldGroup-message--error',
      status == Statuses.SUCCESS && 'FieldGroup-message--success',
      status == Statuses.WARNING && 'FieldGroup-message--warning',
      className,
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
