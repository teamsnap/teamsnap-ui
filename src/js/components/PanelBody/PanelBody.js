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
    const { children, className, mods, style, otherProps } = this.props

    return (
      <div className={ getClassName(className, mods) } style={ style } { ...otherProps }>
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
  otherProps: PropTypes.shape({})
}

PanelBody.defaultProps = {
  className: 'Panel-body',
  mods: null,
  style: {},
  otherProps: {}
}

export default PanelBody
