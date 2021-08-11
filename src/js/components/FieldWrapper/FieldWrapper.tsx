/**
 * @name FieldWrapper
 *
 * @description
 *  A FieldWrapper component is a helper component to group common field components together such as inputs, labels,
 *  and messages. If you need a more custom setup, look at creating your own 'FieldGroup' See the teamsnap patterns
 *  library for more information. https://teamsnap-ui-patterns.netlify.com/patterns/components/field-group.html
 *
 * @example
 *  <FieldWrapper
 *    name='example'
 *    label='Test Input'
 *    field='input'
 *    fieldProps={{ placeholder: 'Some placehodler text' }} />
 *
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { FieldGroup } from '../FieldGroup';
import { FieldLabel } from '../FieldLabel';
import { FieldMessage } from '../FieldMessage';
import { Input } from '../Input';
import { TextArea } from '../TextArea';
import { Checkbox } from '../Checkbox';
import { Radio } from '../Radio';
import { Toggle } from '../Toggle';
import { Select } from '../Select';
import { Status } from '../../types';

const propTypes = {
  name: PropTypes.string.isRequired,
  field: PropTypes.oneOf(['input', 'checkbox', 'radio', 'toggle', 'select', 'textarea']).isRequired,
  fieldProps: PropTypes.any,
  status: Status.PropType,
  label: PropTypes.node,
  message: PropTypes.string,
};

const FieldWrapper = (props: PropTypes.InferProps<typeof propTypes>) => {
  const renderFieldComponent = () => {
    const { name, field, fieldProps } = props;

    const FieldTypes = {
      select: Select,
      checkbox: Checkbox,
      radio: Radio,
      toggle: Toggle,
      textarea: TextArea,
    };

    const FieldTag = FieldTypes[field] || Input;

    if ((field === 'checkbox' || field === 'radio') && fieldProps.options) {
      return (
        fieldProps.options &&
        fieldProps.options.map(({ label, value, ...optionProps }, i) => (
          <FieldTag
            key={i}
            {...fieldProps}
            group={name}
            name={`${name}${i}`}
            label={label}
            {...optionProps}
            inputProps={{
              ...fieldProps.inputProps,
              ...optionProps.inputProps,
              value: value ?? label,
            }}
          />
        ))
      );
    }

    return <FieldTag name={name} {...fieldProps} />;
  };

  const { status, name, label, message } = props;

  return (
    <FieldGroup status={status}>
      {label && <FieldLabel name={name}>{label} </FieldLabel>}
      {renderFieldComponent()}
      {message && <FieldMessage status={status}>{message}</FieldMessage>}
    </FieldGroup>
  );
};

FieldWrapper.defaultProps = {
  fieldProps: {},
  status: null,
  label: null,
  message: null,
};

export default FieldWrapper;
