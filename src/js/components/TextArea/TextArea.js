/**
 * @name TextArea
 *
 * @description
 * A generic wrapper component for the native textarea html element.
 *
 * @example
 *  <TextArea
 *    name='BatchInvoiceDescription' />
 *
 */
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { getClassName } from '../../utils/helpers'

class TextArea extends PureComponent {
  render () {
    const { name, inputProps, className, mods, style, otherProps } = this.props

    return (
      <div className={ getClassName(className, mods) } style={ style } { ...otherProps }>
        <textarea name={ name } id={ name } { ...inputProps } />
      </div>
    )
  }
}

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  inputProps: PropTypes.object,
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object,
  otherProps: PropTypes.object
}

TextArea.defaultProps = {
  inputProps: {},
  className: '',
  mods: null,
  style: {},
  otherProps: {}
}

export default TextArea
