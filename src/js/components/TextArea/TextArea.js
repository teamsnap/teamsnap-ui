import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

// TODO: Test the implementation with and without reduxForms.

class TextArea extends PureComponent {
  render () {
    const { name, className, style, ...otherProps } = this.props
    return (
      <textarea name={ name } className={ className } style={ style } { ...otherProps } />
    )
  }
}

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
}

TextArea.defaultProps = {
  className: '',
  style: {}
}

export default TextArea
