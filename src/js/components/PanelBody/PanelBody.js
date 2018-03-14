import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'


class PanelBody extends PureComponent {
  render () {
    const { className, style, children, ...otherProps } = this.props
    return (
      <div className={ className } style={ style } { ...otherProps }>
        { children }
      </div>
    )
  }
}


PanelBody.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.shape({}),
}

PanelBody.defaultProps = {
  className: 'Panel-body',
  style: {},
}