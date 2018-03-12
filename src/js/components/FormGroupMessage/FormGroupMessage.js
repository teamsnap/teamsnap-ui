import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class FormGroupMessage extends PureComponent {
  render () {
    const { children, className, style, ...otherProps } = this.props

    return (
      <div className={ className } style={ style } { ...otherProps }>
        { children }
      </div>
    )
  }
}

FormGroupMessage.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
}

FormGroupMessage.defaultProps = {
  className: 'FormGroup-message',
  style: {}
}

export default FormGroupMessage
