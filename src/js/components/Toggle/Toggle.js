import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import InputControl from '../InputControl'

class Toggle extends PureComponent {
  render() {
    const { inputProps, ...otherProps } = this.props

    return (
      <InputControl
        type='checkbox'
        labelProps={{ className: 'Toggle-label' }} 
        inputProps={{ className: 'Toggle-input', ...inputProps }} 
        { ...otherProps } />
    )
  }
}

Toggle.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object
}

Toggle.defaultProps = {
  className: 'Toggle',
  mods: null,
  style: {}
}

export default Toggle
