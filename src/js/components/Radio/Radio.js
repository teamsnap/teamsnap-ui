import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

// TODO: Test the implementation with and without reduxForms.

class Radio extends PureComponent {
  renderRadio = (option) => {
    const { className, style, ...otherProps } = this.props
    const { name, label, ...inputProps } = option

    return (
      <div key={ label } className={ className } style={ style } { ...otherProps }>
        <input className='Checkbox-input' type="radio" name={name} { ...inputProps} />
        <label className="Checkbox-label" htmlFor={name}>{label}</label>
      </div>
    )
  }

  render() {
    const { options } = this.props

    return options.map(this.renderRadio)
  }
}

Radio.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired,
  className: PropTypes.string,
  style: PropTypes.object
}

Radio.defaultProps = {
  className: 'Checkbox Checkbox--radio',
  style: {}
}

export default Checkbox
