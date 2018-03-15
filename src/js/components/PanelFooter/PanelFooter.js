import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { getClassName } from '../../utils/helpers'

class PanelFooter extends PureComponent {
  
  render () {
    const { className, mods, style, children } = this.props
    
    return (
      <footer className={ getClassName(className, mods) } style={ style }>
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
}

PanelFooter.defaultProps = {
  className: 'Panel-footer',
  mods: null,
  style: {}
}

export default PanelFooter