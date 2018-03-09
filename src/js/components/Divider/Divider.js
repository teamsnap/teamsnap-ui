/**
 * Divider
 * 
 * A divider is used as a horizontal rule and spacing element to separate content.
 * 
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Element from 'common/Element'

 class Divider extends PureComponent {
  render () {
    return <Element tag='hr' { ...this.props } />
  }
 }

Divider.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  attributes: PropTypes.object
}

Divider.defaultProps = {
  className: 'Divider',
  style: {},
  attributes: {}
}

 export default Divider
