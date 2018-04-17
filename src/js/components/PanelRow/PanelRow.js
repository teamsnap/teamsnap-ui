/**
 * @name PanelRow
 *
 * @description
 *  A panel row component is used with the Panel to wrap the rows for a Panel or table.  See the teamsnap
 *  patterns library for more information https://teamsnap-ui-patterns.netlify.com/patterns/components/panel.html
 *
 * @example
 *  <PanelRow isWithCells>
 *    PanelRow Child Data
 *  </PanelRow>
 *
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { getClassName } from '../../utils/helpers'

class PanelRow extends PureComponent {
  render () {
    const { children, isWithCells, isParent, className, mods, style, otherProps } = this.props

    const panelClasses = getClassName(
      className,
      isWithCells && 'Panel-row--withCells',
      isParent && 'Panel-row--parent',
      mods
    )

    return (
      <div className={ panelClasses } style={ style } { ...otherProps }>
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
  otherProps: PropTypes.object
}

PanelRow.defaultProps = {
  className: 'Panel-row',
  isWithCells: null,
  isParent: null,
  mods: null,
  style: {},
  otherProps: {}
}

export default PanelRow
