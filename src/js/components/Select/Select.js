import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

// TODO: Test the implementation with and without reduxForms.

class Select extends PureComponent {
  renderOptions = option => {
    const { label, value, ...optionProps } = option 

    return <option key={ value } value={ value } { ...optionProps }>{ label }</option>
  }

  render () {
    const { name, options, className, style, inputProps, ...otherProps } = this.props 

    return (
      <label className={ className } style={ style } htmlFor={ name } { ...otherProps }>
        <select className='SelectBox-options' name={ name } { ...inputProps }>
          { options.map(renderOptions) }
        </select>
      </label>
    )
  }
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    disabled: PropTypes.bool
  })).isRequired,
  inputProps: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object
}

Select.defaultProps = {
  inputProps: {},
  className: 'SelectBox',
  style: {}
}

export default Select
