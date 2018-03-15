import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { getClassName } from '../../utils/helpers'

class Tooltip extends PureComponent {
  render () {
    const { text, children, type, className, mods, style } = this.props

    const tooltipClasses = getClassName(
      className,
      type && `Tooltip--${type}`,
      mods
    )

    return (
      <span className={ tooltipClasses } style={ style } data-tooltip={ text }>
        { children }
      </span>
    )
  }
}

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object
}

Tooltip.defaultProps = {
  children: null,
  type: null,
  className: 'Tooltip',
  mods: null,
  style: {}
}

export default Tooltip
