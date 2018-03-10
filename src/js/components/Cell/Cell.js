import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Cell extends PureComponent {
  render () {   
    const { children, className, style, ...otherProps } = this.props

    return (
      <div className={ className} style={ style } { ...otherProps }>
        { children }
      </div>
    )
  }
}

Cell.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
}

Cell.defaultProps = {
  children: null,
  className: 'Grid-cell',
  style: {}
}

export default Cell
