import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'


class PanelHeader extends PureComponent {
  render () {
    const { className, style, children, ...otherProps }
    return ( 
      <header className={ className } style={ sytle } { ...otherProps }>
        { title && <h3 className='Panel-title'>{ title }</h3> }
        { children && <div>{ children }</div> }
      </header>
    )
  }
}

PanelHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  title: PropTypes.string,
}

PanelHeader.defaultProps = {
  children: null,
  className: 'Panel-header'
  style: {},
  title: '',
}