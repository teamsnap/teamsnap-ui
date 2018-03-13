import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class InputControl extends PureComponent {
  render() {
    const { name, label, type, inputProps, labelProps, className, style, ...otherProps } = this.props 

    return (
      <div className={ className } style={ style } { ...otherProps }>
        <input className='Checkbox-input' type={ type } name={ name } { ...inputProps} />
        <label className="Checkbox-label" htmlFor={ name } {...labelProps }>{ label }</label>
      </div> 
    )
  }
}

InputControl.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  inputProps: PropTypes.object,
  labelProps: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object
}


InputControl.defaultProps = {
  label: null,
  inputProps: {},
  labelProps: {},
  className: 'Checkbox',
  style: {}
}

export default InputControl
