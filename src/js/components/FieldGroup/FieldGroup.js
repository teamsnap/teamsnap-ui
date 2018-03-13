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

    let FieldTag = Input
    if (field === 'select') { FieldTag = Select }
    else if (field === 'checkbox') { FieldTag = Checkbox }
    else if (field === 'radio') { FieldTag = Radio }
    else if (field === 'toggle') { FieldTag = Toggle }
    else if (field === 'textarea') { FieldTag = TextArea }

    return <FieldTag name={ name } { ...fieldProps } />
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
