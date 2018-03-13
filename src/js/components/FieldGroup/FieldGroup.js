import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Field from '../Field'
import FieldLabel from '../FieldLabel'
import FieldMessage from '../FieldMessage'
import Input from '../Input'
import TextArea from './TextArea'
import Checkbox from './Checkbox'
import Radio from './Radio'
import Toggle from './Toggle'
import Select from './Select'

class FieldGroup extends PureComponent {
  renderFieldComponent = () => {
    const { name, fieldProps } = this.props

    // TODO: Should be able to clean this return structure up a bit.
    if (field === 'input') { return <Input name={ name } { ...fieldProps } /> }
    else if (field === 'textarea') { return <TextArea name={ name } { ...fieldProps } /> }
    else if (field === 'checkbox') { return <Checkbox name={ name } { ...fieldProps } /> } 
    else if (field === 'radio') { return <Radio name={ name } { ...fieldProps } /> } 
    else if (field === 'toggle') { return <Toggle name={ name } { ...fieldProps } /> }
    else if (field === 'select') { return <Select name={ name } { ...fieldProps } /> }
  }

  render () {
    return (
      <Field isError={ isError }>
        { label && <FieldLabel name={ name } children={ label } /> }
        { this.renderFieldComponent() }
        { message && <FieldMessage children={ message } isError={ isError } /> }
      </Field>
    )
  }
}

FieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  field: PropTypes.oneOf(['input', 'checkbox', 'radio', 'toggle', 'select', 'textarea']).isRequired,
  fieldProps: PropTypes.object,
  label: PropTypes.string,
  message: PropTypes.string,
  isError: PropTypes.bool
}

FieldGroup.defaultProps = {
  fieldProps: {},
  label: null,
  message: null,
  isError: false
}

export default FieldGroup
