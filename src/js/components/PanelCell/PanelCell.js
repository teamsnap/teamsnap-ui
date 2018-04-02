/**
 * @name PanelCell
 *
 * @description
 *  A panel cell component is used for building tables with <Panel /> and <PanelRow /> components.  See the teamsnap
 *  patterns library for more information https://teamsnap-ui-patterns.netlify.com/patterns/components/panel.html
 *
 * @example
 *  <PanelCell isTitle>
 *    PanelCell Child Data
 *  </PanelCell>
 *
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { getClassName } from '../../utils/helpers'

class PanelCell extends PureComponent {
  renderTitle = () => <h4 className='Panel-title'>{ this.props.children }</h4>

  render () {
    const { children, isHeader, isTitle, className, mods, style } = this.props

    const cellClasses = getClassName(
      className,
      isHeader && 'Panel-cell--header',
      mods
    )

    return (
      <div className={ cellClasses } style={ style }>
        { isTitle ? this.renderTitle() : children }
      </div>
    )
  }
}

PanelCell.propTypes = {
  children: PropTypes.node,
  isTitle: PropTypes.bool,
  isHeader: PropTypes.bool,
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object,
}

PanelCell.defaultProps = {
  children: null,
  isTitle: false,
  isHeader: false,
  className: 'Panel-cell',
  mods: null,
  style: {}
}

export default PanelCell
