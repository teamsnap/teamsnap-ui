import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

// TODO: Test the implementation with and without reduxForms.

class Radio extends PureComponent {
  render() {
    const { name, label, className, style, inputProps, ...otherProps } = this.props

    return (
      <div className={ className } style={ style } { ...otherProps }>
        <input className='Checkbox-input' type="radio" name={name} { ...inputProps} />
        <label className="Checkbox-label" htmlFor={name}>{label}</label>
      </div>
    )
  }
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  inputProps: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object
}

Checkbox.defaultProps = {
  inputProps: {},
  className: 'Checkbox Checkbox--radio',
  style: {}
}

export default Checkbox
