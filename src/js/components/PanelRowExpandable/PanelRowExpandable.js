import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import PanelRow from '../PanelRow'
import PanelCell from '../PanelCell'
import Icon from '../Icon'
import { getClassName } from '../../utils/helpers'

class PanelRowExpandable extends PureComponent {
  state = {
    isExpanded: false
  }

  handleRowClick = (e) => {
    e.preventDefault()

    this.setState({
      isExpanded: !this.state.isExpanded
    })
  }

  renderChildLink = (children) => {
    const { isExpanded } = this.state

    return (
      <a onClick={ this.handleRowClick } className={ getClassName('Panel-expandableControl', isExpanded && 'is-expanded') }>
        <span className='Panel-expandableControlIcon'>
          <Icon name='right' />
        </span>
        { children }
      </a>
    )
  }

  renderColumns = (columns, includeLink = false) => {
    const { renderColumn } = this.props

    return columns.map((column, index) => {
      const { children: columnChildren, ...props } = column
      const children = (includeLink && index === 0) ? this.renderChildLink(columnChildren) : columnChildren

      // Thoughts: General index as key is a bad idea.  I think in this case, it might be ok? I'd be open to other ideas.
      // This would be overriden if a 'key' was passed as part of the column data...
      return renderColumn ? renderColumn({ children, ...props }) : <PanelCell key={ index } children={ children } { ...props } />
    })
  }

  renderChildColumns = (childColumns) => {
    const { isExpanded } = this.state

    return (
      <div className={ getClassName('Panel-childRows', isExpanded && 'is-expanded') }>
        <PanelRow isWithCells>
          { this.renderColumns(childColumns) }
        </PanelRow>
      </div>
    )
  }

  render () {
    const { parentColumns, childColumns, className, mods, style } = this.props
    const { isExpanded } = this.state
    const hasChildren = childColumns && childColumns.length > 0

    return (
      <div className={ getClassName(className, mods) } style={ style } >
        <PanelRow isWithCells isParent>
          { this.renderColumns(parentColumns, hasChildren) }
        </PanelRow>

        { hasChildren && this.renderChildColumns(childColumns) }
      </div>
    )
  }
}

PanelRowExpandable.propTypes = {
  parentColumns: PropTypes.arrayOf(PropTypes.object).isRequired,
  childColumns: PropTypes.arrayOf(PropTypes.object),
  renderColumn: PropTypes.func,
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object
}

PanelRowExpandable.defaultProps = {
  childColumns: null,
  renderColumn: null,
  className: 'Panel-expandableRow',
  mods: null,
  style: {}
}

export default PanelRowExpandable
