import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { getClassName } from '../../utils/helpers'

class Panel extends PureComponent {
  render () {
    const { children, className, mods, isStriped, maxSize, style } = this.props

    const panelClasses = getClassName(
      className,
      maxSize && `Panel--${maxSize}Max-stacked`,
      isStriped && 'Panel--striped',
      mods
    )

    return (
      <div className={ panelClasses } style={ style }>
        { children }
      </div>
    )
  }
}

Panel.propTypes = {
  children: PropTypes.node.isRequired,
  isStriped: PropTypes.bool,
  maxSize: PropTypes.string,
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object,
}

Panel.defaultProps = {
  className: 'Panel',
  isStriped: false,
  maxSize: null,
  mods: null,
  style: {}
}

export default Panel
