/**
 * @name PanelHeader
 * 
 * @description
 *  A panel header component is used with the Panel to wrap the heading content.  See the teamsnap patterns
 *  library for more information https://teamsnap-ui-patterns.netlify.com/patterns/components/panel.html
 *
 * @example
 *  <PanelHeader>
 *    PanelHeader Child Data
 *  </PanelHeader>
 *
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { getClassName } from '../../utils/helpers'

class PanelHeader extends PureComponent {
  render () {
    const { title, className, mods, style, children } = this.props 

    return ( 
      <header className={ getClassName(className, mods) } style={ style }>
        { title && <h3 className='Panel-title'>{ title }</h3> }
        { children }
      </header>
    )
  }
}

PanelHeader.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.shape({})
}

PanelHeader.defaultProps = {
  children: null,
  title: '',
  className: 'Panel-header',
  mods: null,
  style: {}
}

export default PanelHeader
