import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Grid extends PureComponent {
  render () {
    const { children, className, style, ...otherProps } = this.props

    return (
      <div className={ className} style={ style } { ...otherProps }>
        { children }
      </div>
    )
  }
}

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
}

Grid.defaultProps = {
  className: 'Grid', 
  style: {}
}

export default Grid
