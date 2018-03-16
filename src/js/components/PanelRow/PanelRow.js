import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { getClassName } from '../../utils/helpers'

class PanelRow extends PureComponent {
  render () {
    const { children, isWithCells, isParent, className, mods, style } = this.props

    const panelClasses = getClassName(
      className,
      isWithCells && 'Panel-row--withCells',
      isParent && 'Panel-row--parent',
      mods
    )

    return (
      <div className={ panelClasses } style={ style }>
        { children }
      </div>
    )
  }
}

PanelRow.propTypes = {
  children: PropTypes.node.isRequired,
  isWithCells: PropTypes.bool,
  isParent: PropTypes.bool,
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object,
}

PanelRow.defaultProps = {
  className: 'Panel-row',
  isWithCells: null,
  isParent: null,
  mods: null,
  style: {}
}

export default PanelRow
