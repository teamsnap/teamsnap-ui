import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Field from '../Field'
import FieldLabel from '../FieldLabel'
import FieldMessage from '../FieldMessage'
import Input from '../Input'
import TextArea from './TextArea'

class FieldGroup extends PureComponent {
  renderFieldComponent = () => {
    const { name, fieldProps } = this.props
        
    // TODO: Adding these various components needs a little work.  The api(s) for these are slightly different, need to
    //  test and standardize better with and without reduxForms. They are too different for this to make logical sense.
    //  Select, Checkbox, Radio, Toggle
    if (field === 'input') {
      return <Input name={ name } inputProps={ fieldProps } />
    } else if (field === 'textarea') {
      return <TextArea name={ name } { ...fieldProps } />
    }
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
