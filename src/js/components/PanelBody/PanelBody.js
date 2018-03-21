/**
 * @name PanelBody
 * 
 * @description
 *  A panel body component is used with the Panel to wrap the body content.  See the teamsnap patterns
 *  library for more information https://teamsnap-ui-patterns.netlify.com/patterns/components/panel.html
 *
 * @example
 *  <PanelBody>
 *    PanelBody Child Data
 *  </PanelBody>
 *
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { getClassName } from '../../utils/helpers'

class PanelBody extends PureComponent {
  render () {
    const { className, mods, style, children } = this.props

    return (
      <div className={ getClassName(className, mods) } style={ style }>
        { children }
      </div>
    )
  }
}


PanelBody.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.shape({}),
}

PanelBody.defaultProps = {
  className: 'Panel-body',
  mods: null,
  style: {},
}

export default PanelBody
