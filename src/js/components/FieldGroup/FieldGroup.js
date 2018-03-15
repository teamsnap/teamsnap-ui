import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Field from '../Field'
import FieldLabel from '../FieldLabel'
import FieldMessage from '../FieldMessage'
import Input from '../Input'
import TextArea from '../TextArea'
import Checkbox from '../Checkbox'
import Radio from '../Radio'
import Toggle from '../Toggle'
import Select from '../Select'

class FieldGroup extends PureComponent {
  renderFieldComponent = () => {
    const { name, field, fieldProps } = this.props

    let FieldTag = Input
    if (field === 'select') { FieldTag = Select }
    else if (field === 'checkbox') { FieldTag = Checkbox }
    else if (field === 'radio') { FieldTag = Radio }
    else if (field === 'toggle') { FieldTag = Toggle }
    else if (field === 'textarea') { FieldTag = TextArea }

    return <FieldTag name={ name } { ...fieldProps } />
  }

  render () {
    const { status, name, label, message } = this.props 

    return (
      <Field status={ status }>
        { label && <FieldLabel name={ name } children={ label } /> }
        { this.renderFieldComponent() }
        { message && <FieldMessage children={ message } isError={ status === 'error' } /> }
      </Field>
    )
  }
}

FieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  field: PropTypes.oneOf(['input', 'checkbox', 'radio', 'toggle', 'select', 'textarea']).isRequired,
  fieldProps: PropTypes.object,
  status: PropTypes.oneOf([null, 'success', 'error']),
  label: PropTypes.string,
  message: PropTypes.string,
}

FieldGroup.defaultProps = {
  fieldProps: {},
  status: null,
  label: null,
  message: null
}

export default FieldGroup
