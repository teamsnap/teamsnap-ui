/**
 * @name FieldWrapper
 * 
 * @description
 *  A FieldWrapper component is a helper component to group common field components together such as inputs, labels, 
 *  and messages. If you need a more custom setup, look at creating your own 'FieldGroup' See the teamsnap patterns
 *  library for more information. https://teamsnap-ui-patterns.netlify.com/patterns/components/form-group.html
 *
 * @example
 *  <FieldWrapper
 *    name='example' 
 *    label='Test Input' 
 *    field='input' 
 *    fieldProps={{ placeholder: 'Some placehodler text' }} />
 *
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import FieldGroup from '../FieldGroup'
import FieldLabel from '../FieldLabel'
import FieldMessage from '../FieldMessage'
import Input from '../Input'
import TextArea from '../TextArea'
import Checkbox from '../Checkbox'
import Radio from '../Radio'
import Toggle from '../Toggle'
import Select from '../Select'

class FieldWrapper extends PureComponent {
  renderFieldComponent = () => {
    const { name, field, fieldProps } = this.props

    const FieldTypes = {
      select: Select,
      checkbox: Checkbox,
      radio: Radio,
      toggle: Toggle,
      textarea: TextArea
    }
    
    const FieldTag = (FieldTypes[field] || Input)

    return <FieldTag name={ name } { ...fieldProps } />
  }

  render () {
    const { status, name, label, message } = this.props 

    return (
      <FieldGroup status={ status }>
        { label && <FieldLabel name={ name } children={ label } /> }
        { this.renderFieldComponent() }
        { message && <FieldMessage children={ message } isError={ status === 'error' } /> }
      </FieldGroup>
    )
  }
}

FieldWrapper.propTypes = {
  name: PropTypes.string.isRequired,
  field: PropTypes.oneOf(['input', 'checkbox', 'radio', 'toggle', 'select', 'textarea']).isRequired,
  fieldProps: PropTypes.object,
  status: PropTypes.oneOf([null, 'success', 'error']),
  label: PropTypes.string,
  message: PropTypes.string,
}

FieldWrapper.defaultProps = {
  fieldProps: {},
  status: null,
  label: null,
  message: null
}

export default FieldWrapper
