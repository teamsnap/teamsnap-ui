import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { getClassName } from '../../utils/helpers'

class PanelCell extends PureComponent {
  renderTitle = (titleClass = '') => {
    const { children } = this.props
    return <h4 className={ titleClass }>{ children }</h4>
  }

  renderChildren = () => {
    const { isHeader, children } = this.props
    return isHeader ? this.renderTitle() : children
  }

  render () {
    const { isHeader, className, mods, style } = this.props

    const cellClasses = getClassName(
      className,
      isHeader && 'Panel-cell--header',
      mods
    )

    return (
      <div className={ cellClasses } style={ style }>
        { isTitle ? this.renderTitle('Panel-title') : renderChildren() }
      </div>
    )
  }
}

PanelCell.propTypes = {
  children: PropTypes.node.isRequired,
  isHeader: PropTypes.bool,
  isTitle: PropTypes.bool,
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object,
}

PanelCell.defaultProps = {
  title: null,
  isHeader: false,
  isTitle: false,
  className: 'Panel-cell',
  mods: null,
  style: {}
}

export default PanelCell
