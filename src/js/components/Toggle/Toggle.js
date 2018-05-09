/**
 * @name Toggle
 *
 * @description
 * A controlled input element to toggle a boolean state. This calls the shared components InputControl with all the
 * appropriate options. See the teamsnap patterns library for more information.
 * https://teamsnap-ui-patterns.netlify.com/patterns/components/toggle.html
 *
 * @example
 *  <Toggle
 *    name='OfflinePayments' />
 *
 */

 import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import InputControl from '../InputControl'

class Toggle extends PureComponent {
  render() {
    const { name, inputProps, className, mods, style, otherProps } = this.props

    return (
      <InputControl
        name={ name }
        className={ className }
        mods={ mods }
        style={ style }
        type='checkbox'
        labelProps={{ className: 'Toggle-label' }}
        inputProps={{ className: 'Toggle-input', ...inputProps }}
        { ...otherProps } />
    )
  }
}

Toggle.propTypes = {
  name: PropTypes.string.isRequired,
  inputProps: PropTypes.object,
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object,
  otherProps: PropTypes.object
}

Toggle.defaultProps = {
  inputProps: {},
  className: 'Toggle',
  mods: null,
  style: {},
  otherProps: {}
}

export default Toggle
