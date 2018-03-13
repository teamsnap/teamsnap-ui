import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

// TODO: Test the implementation with and without reduxForms.

class Checkbox extends PureComponent {
  renderCheckbox = (option) => {
    const { className, style, ...otherProps } = this.props
    const { name, label, ...inputProps } = option

    return (
      <div key={ name } className={ className } style={ style } { ...otherProps }>
        <input className='Checkbox-input' type="checkbox" id={name} name={name} { ...inputProps} />
        <label className="Checkbox-label" htmlFor={name}>{label}</label>
      </div>
    )
  }

  render() {
    const { options } = this.props

    return options.map(this.renderCheckbox)
  }
}

Checkbox.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired,
  className: PropTypes.string,
  style: PropTypes.object
}

Checkbox.defaultProps = {
  className: 'Checkbox',
  style: {}
}

export default Checkbox
