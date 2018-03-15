import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { getClassName } from '../../utils/helpers'

class PanelCell extends PureComponent {
  renderChildrenHeader = (children) => <h4 className="Panel-title">{ children }</h4>

  render () {
    const { children, isHeader, className, mods, style } = this.props

    // Thoughts: The docs had to variations of a heading, can we update this or are they different use cases?
    //  * Panel-cell & Panel-cell--header
    //  * Panel-cell > Panel-title

    return (
      <div className={ getClassName(className, mods) } style={ style }>
        { isHeader ? this.renderChildrenHeader(children) : children }
      </div>
    )
  }
}

PanelCell.propTypes = {
  children: PropTypes.node.isRequired,
  isHeader: PropTypes.bool,
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object,
}

PanelCell.defaultProps = {
  title: null,
  isHeader: null,
  className: 'Panel-cell',
  mods: null,
  style: {}
}

export default PanelCell
