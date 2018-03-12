import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Input extends PureComponent {
  render () {
    const { type, name, className, style, ...otherProps } = this.props

    return <input name={ name } type={ type } className={ className } style={ style } { ...otherProps } />
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object
}

Input.defaultProps = {
  type: 'text',
  className: 'Input',
  style: {}
}

export default Input
