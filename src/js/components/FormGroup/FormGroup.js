import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import InputGroup from '../InputGroup'

class FormGroup extends PureComponent {
  renderField = () => {
    const { name, fieldProps } = this.props
    
    // TODO: check for different field 'tags' and return approprirate component
    return <InputGroup name={ name } inputProps={ fieldProps } />
  }

  render () {
    const { name, fieldStatus, label, message, className, style, ...otherProps } = this.props 

    let groupClassName = className

    if (fieldStatus === 'error') {
      groupClassName = `${className} is-notValid`
    } else if (fieldStatus === 'success') {
      groupClassName = `${className} is-valid`
    }
   
    return (
      <div className={ groupClassName} style={ style } { ...otherProps }>
        { label && <Label htmlFor={ name } children={ label } /> }
        { this.renderField() }
        { message &&
          <FormGroupMessage
            className={ fieldStatus === 'error' ? 'FormGroup-feedback' : 'FormGroup-message' }
            children={ message } />
        }
      </div>
    )
  }
}

FormGroup.propTypes = {
  name: PropTypes.string.isRequired,
  field: PropTypes.oneOf(['input', 'select', 'radio', 'checkbox', 'toggle', 'textarea']),
  fieldProps: PropTypes.object,
  fieldStatus: PropTypes.oneOf([null, 'error', 'success']),
  label: PropTypes.string,
  message: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object
}

FormGroup.defaultProps = {
  field: 'input',
  fieldProps: {},
  fieldStatus: null,
  label: null,
  message: null,
  className: 'FormGroup',
  style: {}
}

export default FormGroup
