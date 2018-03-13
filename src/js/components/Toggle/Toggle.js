import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

// TODO: Test the implementation with and without reduxForms.

class Checkbox extends PureComponent {
  render() {
    const { name, className, style, inputProps, ...otherProps } = this.props

    return (
      <div className={className} style={style} { ...otherProps }>
        <input className='Toggle-input' type="checkbox" name={name} { ...inputProps} />
        <label className="Toggle-label" htmlFor={name} />
      </div>
    )
  }
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
}

Checkbox.defaultProps = {
  className: 'Toggle',
  style: {}
}

export default Checkbox
