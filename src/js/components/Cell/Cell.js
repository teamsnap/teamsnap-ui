import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { getClassName } from '../../utils/helpers'

class Cell extends PureComponent {
  render () {   
    const { children, className, mods, style } = this.props

    return (
      <div className={ getClassName(className, mods)} style={ style }>
        { children }
      </div>
    )
  }
}

Cell.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object
}

Cell.defaultProps = {
  children: null,
  className: 'Grid-cell',
  mods: null,
  style: {}
}

export default Cell
