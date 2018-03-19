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
    const { name, className, mods, style, ...inputProps } = this.props

    return (
      <textarea name={ name } id={ name } className={ getClassName(className, mods) } style={ style } { ...inputProps } />
    )
  }
}

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object
}

TextArea.defaultProps = {
  className: '',
  mods: null,
  style: {}
}

export default TextArea
