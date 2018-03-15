import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { getClassName } from '../../utils/helpers'

class Input extends PureComponent {
  render () {
    const { name, children, type, iconPosition, className, mods, style, inputProps } = this.props

    const inputClasses = getClassName(
      className,
      (children && iconPosition) && `InputGroup--${iconPosition}Icon`,
      mods
    )

    return (
      <div className={ inputClasses } style={ style }>
        <input id={ name } name={ name } type={ type } className='Input' { ...inputProps } />
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
  iconPosition: PropTypes.oneOf([null, 'left', 'right']),
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object
}

Input.defaultProps = {
  type: 'text',
  children: null,
  inputProps: {},
  iconPosition: null,
  className: 'InputGroup',
  mods: null,
  style: {}
}

export default Input
