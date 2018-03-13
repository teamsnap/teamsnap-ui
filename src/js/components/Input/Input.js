import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

// TODO: Split up into Input && InputGroup ?
// TODO: Test the implementation with and without reduxForms.

class Input extends PureComponent {
  render () {
    const { name, children, type, className, style, inputProps, ...otherProps } = this.props

    return (
      <div className={ className } style={ style } { ...otherProps }>
        <input name={ name } type={ type } className='Input' { ...inputProps } />
        { children && <span className='InputGroup-icon'>{ children }</span> }
      </div>
    )
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  children: PropTypes.node,
  inputProps: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object
}

Input.defaultProps = {
  type: 'text',
  children: null,
  inputProps: {},
  className: 'InputGroup',
  style: {}
}

export default Input
