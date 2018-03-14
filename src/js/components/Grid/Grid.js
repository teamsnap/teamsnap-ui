import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { getClassName } from '../../utils/helpers'

class Grid extends PureComponent {
  render () {
    const { children, isFit, isEqualHeight, isAlignCenter, isAlignMiddle, className, mods, style } = this.props

    const gridClasses = getClassName(
      className,
      isFit && 'Grid--fit',
      isEqualHeight && 'Grid--equalHeight',
      isAlignCenter && 'Grid--alignCenter',
      isAlignMiddle && 'Grid--alignMiddle',
      mods
    )

    return (
      <div className={ gridClasses } style={ style }>
        { children }
      </div>
    )
  }
}

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  isFit: PropTypes.bool,
  isEqualHeight: PropTypes.bool,
  isAlignCenter: PropTypes.bool,
  isAlignMiddle: PropTypes.bool,
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object
}

Grid.defaultProps = {
  isFit: false,
  isEqualHeight: false,
  isAlignCenter: false,
  isAlignMiddle: false,
  className: 'Grid', 
  mods: null,
  style: {}
}

export default Grid
