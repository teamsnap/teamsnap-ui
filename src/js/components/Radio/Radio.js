import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import InputControl from '../InputControl'

class Radio extends PureComponent {
  render() {
    return <InputControl type='radio' { ...this.props } />
  }
}

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  group: PropTypes.string.isRequired,
  inputProps: PropTypes.object,
  isInline: PropTypes.bool,
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object
}

Radio.defaultProps = {
  inputProps: {},
  isInline: false,
  className: 'Checkbox Checkbox--radio',
  mods: null,
  style: {}
}

export default Radio
