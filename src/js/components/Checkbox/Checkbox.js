import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import InputControl from '../InputControl'

class Checkbox extends PureComponent {
  render() {
    return <InputControl type='checkbox' { ...this.props } />
  }
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  inputProps: PropTypes.object,
  isInline: PropTypes.bool,
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object
}

Checkbox.defaultProps = {
  inputProps: {},
  isInline: false,
  className: 'Checkbox',
  mods: null,
  style: {}
}

export default Checkbox
