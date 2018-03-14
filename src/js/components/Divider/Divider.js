/**
 * Divider
 * 
 * A divider is used as a horizontal rule and spacing element to separate content.
 * 
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { getClassName } from '../../utils/helpers'

 class Divider extends PureComponent {
  render () {
    const { className, isIndented, isSpaced, isThick, mods, style } = this.props
    
    const dividerClasses = getClassName(
      className,
      isIndented && 'Divider--indented',
      isSpaced && 'Divider--space',
      isThick && 'Divider--thick',
      mods
    )

    return <hr className={ dividerClasses } style={ style } />
  }
 }

Divider.propTypes = {
  isIndented: PropTypes.bool,
  isSpaced: PropTypes.bool,
  isThick: PropTypes.bool,
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object
}

Divider.defaultProps = {
  isIndented: false,
  isSpaced: false,
  isThick: false,
  className: 'Divider',
  mods: null,
  style: {}
}

 export default Divider
