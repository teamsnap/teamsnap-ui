import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Field extends PureComponent {
  renderLabel = (labelProps) => {
    const { name, label } = this.props

    return (
      <label htmlFor={ name } className='FormGroup-label' { ...labelProps }>
        { label }
      </label>
    )
  }

  renderMessage = (messageProps) => {
    const { errorMessage } = this.props

    return (
      <div className='FormGroup-feedback' { ...messageProps }>
        { errorMessage }
      </div>
    )
  }

  render () {
    const { name, label, errorMessage, className, style, labelProps, messageProps, ...otherProps } = this.props 
   
    return (
      <div className={ errorMessage ? `${className} is-notValid` : className } style={ style } { ...otherProps }>
        { label && this.renderLabel(labelProps) }
        { children }
        { errorMessage && this.renderMessage(messageProps) }
      </div>
    )
  }
}

Field.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  labelProps: PropTypes.object,
  messageProps: PropTypes.object
}

Field.defaultProps = {
  label: null,
  errorMessage: null,
  className: 'FormGroup',
  style: {},
  labelProps: {},
  messageProps: {}
}

export default Field
