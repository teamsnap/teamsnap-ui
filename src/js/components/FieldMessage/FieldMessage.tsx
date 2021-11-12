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

const propTypes = {
  children: PropTypes.string,
  isError: PropTypes.bool,
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object,
  testId: PropTypes.string,
  otherProps: PropTypes.object,
  status: Status.PropType,
};

const FieldMessage = (props: PropTypes.InferProps<typeof propTypes>) => {
  const { children, className, mods, style, testId, otherProps, status } = props;

  const messageClasses = getClassName(
    'FieldGroup-message',
    status === Statuses.ERROR && 'FieldGroup-message--error',
    status === Statuses.SUCCESS && 'FieldGroup-message--success',
    status === Statuses.WARNING && 'FieldGroup-message--warning',
    className,
    mods
  );

  return (
    <div className={messageClasses} style={style} data-testid={testId} {...otherProps}>
      {children}
    </div>
  );
};

FieldMessage.defaultProps = {
  children: null,
  className: 'FieldGroup-message',
  mods: null,
  style: {},
  testId: null,
  otherProps: {},
};

export default FieldMessage;
