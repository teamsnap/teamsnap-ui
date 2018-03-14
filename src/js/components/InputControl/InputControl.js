import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { getClassName } from '../../utils/helpers'

class InputControl extends PureComponent {
  render() {
    const { name, label, type, inputProps, labelProps, className, style } = this.props 

    const classes = getClassName(
      className,
      isInline && 'Checkbox--inline',
      mods
    )

    return (
      <div className={ classes } style={ style }>
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
  isInline: PropTypes.bool,
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object
}


InputControl.defaultProps = {
  label: null,
  inputProps: {},
  labelProps: {},
  isInline: false,
  className: null,
  mods: null,
  style: {}
}

export default InputControl
