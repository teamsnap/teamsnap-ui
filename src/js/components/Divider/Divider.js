/**
 * Divider
 * 
 * A divider is used as a horizontal rule and spacing element to separate content.
 * 
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

 class Divider extends PureComponent {
  render () {
    const { className, style, ...otherProps } = this.props
    return <hr className={ className} style={ style } { ...otherProps } />
  }
 }

Divider.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
}

Divider.defaultProps = {
  className: 'Divider',
  style: {}
}

 export default Divider
