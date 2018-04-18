/**
 * @name Table
 *
 * @description
 *  A Table component that works like a helper in composing the Panel components and various other options.
 *    See the Teamsnap patterns library for more information.  https://teamsnap-ui-patterns.netlify.com/patterns/components/table.html
 *
 * @example
 *  <Table
 *    defaultSort='col2'
 *    columns=[
 *      { name: 'col1', label: 'Column One', isSortable: true },
 *      { name: 'col2', label: 'Column Two', isSortable: true },
 *      { name: 'col3', label: 'Column Three', render: (column, row) => <a href={`/path/to/${row.id}`}>{ row.col3 }</a> }
 *    ]
 *    rows=[
 *      { id: 1, col1: 'Row 1 Column One', col2: 'Row 1 Column 2', col3: 'Row 1 Column 3' },
 *      { id: 2, col1: 'Row 2 Column One', col2: 'Row 2 Column 2', col3: 'Row 2 Column 3' },
 *      { id: 3, col1: 'Row 3 Column One', col2: 'Row 3 Column 2', col3: 'Row 3 Column 3' }
 *    ] />
 *
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { setUniqueId, capitalize, getClassName } from '../../utils/helpers'
import { sortBy } from '../../utils/sort'
import Icon from '../Icon'
import Panel from '../Panel'
import PanelBody from '../PanelBody'
import PanelRow from '../PanelRow'
import PanelCell from '../PanelCell'
import TextLink from '../TextLink'

class Table extends PureComponent {
  state = {
    items: [],
    sortByColumn: null,
    sortByReverse: false
  }

  componentWillMount() {
    const { rows, defaultSort } = this.props
    const items = setUniqueId(rows)
    const tableState = defaultSort ? this.sortItems(defaultSort, items) : { items }

    this.setState({ ...tableState })
  }

  sortItems = (newSort, newItems) => {
    const { columns } = this.props

    // Check if newSort has a `-`, representing reverse sorting
    let sortByReverse = newSort.charAt(0) === '-' ? true : false
    const sortByColumn = sortByReverse ? newSort.substr(1) : newSort

    // If newSort has same name as previous sort - reverse sort direction
    if (sortByColumn === this.state.sortByColumn) {
      sortByReverse = !this.state.sortByReverse
    }

    const { name, sortType, sortFn } = columns.find(c => c.name === sortByColumn)

    const items = sortBy(newItems, { name, sortType, sortFn, isReverse: sortByReverse })

    return { items, sortByColumn, sortByReverse }
  }

  handleSortClick = e => {
    e.preventDefault()
    const { items } = this.state
    const sortName = e.currentTarget.getAttribute('href')
    const tableState = this.sortItems(sortName, items)

    this.setState({ ...tableState })
  }

  renderSortLabel = label => <span className="u-colorInfo u-textNoWrap">{ label }</span>

  renderSortLink = column => {
    const { sortByColumn, sortByReverse } = this.state
    const activeColumn = column.name === sortByColumn

    const ascLinkMods = getClassName('u-block', activeColumn && !sortByReverse && 'u-colorHighlight')
    const descLinkMods = getClassName('u-block', activeColumn && sortByReverse && 'u-colorHighlight')

    const textLinkMods = getClassName(
      'u-flex',
      column.align === 'right' && 'u-flexJustifyEnd u-spaceNegativeRightSm',
      column.align === 'center' && 'u-flexJustifyCenter'
    )

    return (
      <TextLink location={ column.name } onClick={ this.handleSortClick } mods={ textLinkMods }>
        { this.renderSortLabel(column.label) }
        <div className="u-colorGrey u-fontSizeXs u-spaceLeftXs">
          <Icon name="up" mods={ ascLinkMods } />
          <Icon name="down" mods={ descLinkMods } />
        </div>
      </TextLink>
    )
  }

  renderPanelCell = (children, column) => {
    const cellMods = getClassName(column.mods, `u-text${capitalize(column.align || 'Left')}`)

    return (
      <PanelCell
        key={ column.key }
        mods={ cellMods }
        style={ column.style }
        isTitle={ column.isTitle }
        { ...column.otherProps }>

        { children }
      </PanelCell>
    )
  }

  renderColumn = (column, row) => {
    const data = row[column.name]
    const children = column.render ? column.render(column, row) : data

    return this.renderPanelCell(children, { key: `${row.id}-${column.name}`, itTitle: false, ...column })
  }

  renderHeaderColumn = column => {
    const children = column.isSortable ? this.renderSortLink(column) : this.renderSortLabel(column.label)

    return this.renderPanelCell(children, { key: column.name, isTitle: true, ...column })
  }

  renderRow = row => {
    const { columns } = this.props

    return (
      <PanelRow key={ row.id } isWithCells>
        { columns.map(column => this.renderColumn(column, row)) }
      </PanelRow>
    )
  }

  renderTableColumns = () => {
    const { columns } = this.props
    return columns.map(this.renderHeaderColumn)
  }

  renderTableRows = () => {
    const { items } = this.state
    return items.map(this.renderRow)
  }

  render() {
    const { isStriped, className, mods, style, otherProps } = this.props

    return (
      <Panel className={ className } mods={ mods } isStriped={ isStriped } style={ style } { ...otherProps }>
        <PanelBody>
          <PanelRow isWithCells>{ this.renderTableColumns() }</PanelRow>
          { this.renderTableRows() }
        </PanelBody>
      </Panel>
    )
  }
}

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string,
      render: PropTypes.func,
      isSortable: PropTypes.bool,
      sortType: PropTypes.string,
      sortFn: PropTypes.func,
      align: PropTypes.oneOf(['right', 'left', 'center']),
      mods: PropTypes.string,
      style: PropTypes.object,
      otherProps: PropTypes.object
    })
  ),
  rows: PropTypes.arrayOf(PropTypes.object),
  defaultSort: PropTypes.string,
  isStriped: PropTypes.bool,
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object,
  otherProps: PropTypes.object
}

Table.defaultProps = {
  columns: [],
  rows: [],
  defaultSort: null,
  isStriped: true,
  className: 'Panel',
  mods: null,
  style: {},
  otherProps: {}
}

export default Table
