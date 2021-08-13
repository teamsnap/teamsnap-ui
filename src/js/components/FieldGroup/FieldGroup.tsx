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

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { getClassName } from '../../utils/helpers';
import { Statuses } from '../../types';

const propTypes = {
  children: PropTypes.node.isRequired,
  status: PropTypes.oneOf([null, 'success', 'error']),
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object,
  otherProps: PropTypes.object,
  isDisabled: PropTypes.bool,
  isInline: PropTypes.bool,
};

type Props = PropTypes.InferProps<typeof propTypes>;

const FieldGroup = ({
  children,
  status,
  className,
  mods,
  style,
  otherProps,
  isDisabled,
  isInline,
}: Props) => {
  const fieldClasses = getClassName(
    className,
    status === Statuses.ERROR && 'is-notValid',
    status === Statuses.SUCCESS && 'is-valid',
    status === Statuses.WARNING && 'is-warning',
    isDisabled && 'is-disabled',
    isInline && 'FieldGroup--inline',
    mods
  );

  return (
    <div className={fieldClasses} style={style} {...otherProps}>
      {children}
    </div>
  );
};

FieldGroup.defaultProps = {
  status: null,
  className: 'FieldGroup',
  mods: null,
  style: {},
  otherProps: {},
};

export default FieldGroup;
