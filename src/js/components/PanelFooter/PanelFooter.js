import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'


class PanelFooter extends PureComponent {
  
  render () {
    const { className, style, children, ...otherProps } = this.props
    
    return (
      <footer className={ className } style={ style } { ...otherProps }>
        { children }
      </footer>
    )
  }
}

PanelFooter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
}

PanelFooter.defaultProps = {
  className: 'Panel-footer',
  style: {}
}