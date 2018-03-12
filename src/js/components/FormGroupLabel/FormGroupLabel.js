import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class FormGroupLabel extends PureComponent {
  render () {
    const { htmlFor, children, className, style, ...otherProps } = this.props

    return (
      <label htmlFor={ htmlFor } className={ className } style={ style } { ...otherProps }>
        { children }
      </label>
    )
  }
}

FormGroupLabel.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
}

FormGroupLabel.defaultProps = {
  children: null,
  className: 'FormGroup-label',
  style: {}
}

export default FormGroupLabel
