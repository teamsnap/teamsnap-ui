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
  inputProps: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object
}

Radio.defaultProps = {
  inputProps: {},
  className: 'Checkbox Checkbox--radio',
  style: {}
}

export default Radio
