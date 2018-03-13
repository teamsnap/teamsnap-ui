import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import InputControl from '../InputControl'

// TODO: Test the implementation with and without reduxForms.

class Checkbox extends PureComponent {
  render() {
    return <InputControl type='checkbox' { ...this.props } />
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
  className: 'Checkbox',
  style: {}
}

export default Checkbox
