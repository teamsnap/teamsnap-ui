import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class InputGroup extends PureComponent {
  render () {
    const { name, iconPosition, icon, className, style, inputProps, ...otherProps } = this.props

    const groupClassName = icon ? `${ className } InputGroup--${ iconPosition }Icon` : className

    return (
      <div className={ groupClassName } style={ style } { ...otherProps }>
        <Input name={ name } { ...inputProps } />
        { icon && <span className='InputGroup-icon'>{ icon }</span> }
      </div>
    )
  }
}

InputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  inputProps: PropTypes.object,
  icon: PropTypes.string,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  className: PropTypes.string,
  style: PropTypes.object
}

InputGroup.defaultProps = {
  inputProps: {},
  icon: null,
  iconPosition: 'left',
  className: 'InputGroup',
  style: {}
}

export default InputGroup
