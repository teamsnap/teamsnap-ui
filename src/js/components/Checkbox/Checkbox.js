/**
 * @name Checkbox
 * 
 * @description
 *  A common checkbox component that will render the appropriate styles. This calls the shared components InputControl
 *  with all the appropriate options. See the teamsnap patterns library for more information.
 *    https://teamsnap-ui-patterns.netlify.com/patterns/components/checkbox.html
 *
 * @example
 *  <Checkbox name='example' label='Check Me' isInline />
 *
 */

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
