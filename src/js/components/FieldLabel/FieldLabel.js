import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class FieldLabel extends PureComponent {
  render () {
    const { name, children, className, style, ...otherProps } = this.props

    return (
      <label htmlFor={ name } className={ className } style={ style } { ...otherProps }>
        { children }
      </label>
    )
  }
}

FieldLabel.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
}

FieldLabel.defaultProps = {
  className: 'FormGroup-label',
  style: {}
}

export default FieldLabel
