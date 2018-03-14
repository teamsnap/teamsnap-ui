import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'


class PanelHeader extends PureComponent {
  render () {
    const { title, className, style, children, ...otherProps } = this.props 

    return ( 
      <header className={ className } style={ style } { ...otherProps }>
        { title && <h3 className='Panel-title'>{ title }</h3> }
        { children && <div>{ children }</div> }
      </header>
    )
  }
}

PanelHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  title: PropTypes.string,
}

PanelHeader.defaultProps = {
  children: null,
  className: 'Panel-header',
  style: {},
  title: '',
}

export default PanelHeader