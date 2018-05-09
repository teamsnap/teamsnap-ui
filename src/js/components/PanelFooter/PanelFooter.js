/**
 * @name PanelFooter
 *
 * @description
 *  A panel footer component is used with the Panel to wrap the footer content.  See the teamsnap patterns
 *  library for more information https://teamsnap-ui-patterns.netlify.com/patterns/components/panel.html
 *
 * @example
 *  <PanelFooter>
 *    PanelFooter Child Data
 *  </PanelFooter>
 *
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { getClassName } from '../../utils/helpers'

class PanelFooter extends PureComponent {

  render () {
    const { children, className, mods, style, otherProps } = this.props

    return (
      <footer className={ getClassName(className, mods) } style={ style } { ...otherProps }>
        { children }
      </footer>
    )
  }
}

PanelFooter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object,
  otherProps: PropTypes.object
}

PanelFooter.defaultProps = {
  className: 'Panel-footer',
  mods: null,
  style: {},
  otherProps: {}
}

export default PanelFooter
