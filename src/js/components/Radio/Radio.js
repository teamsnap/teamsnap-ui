/**
 * @name Radio
 * 
 * @description
 *  A common radio component that will render the appropriate styles for a html radio element. This calls the shared
 *  components InputControl with all the appropriate options. See the teamsnap patterns library for more information.
 *    https://teamsnap-ui-patterns.netlify.com/patterns/components/checkbox.html
 * 
 * @example
 *  <Radio
 *    name='example'
 *    label='Option One'
 *    group='exampleOptions'
 *    isInline />
 * 
 */

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
