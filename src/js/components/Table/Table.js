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
import { setUniqueId } from '../../utils/helpers'
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

  renderSortLink = (name, label) => {
    const { sortByColumn, sortByReverse } = this.state
    const ascLinkClassName = (name === sortByColumn && !sortByReverse) ? 'u-colorHighlight' : ''
    const descLinkClassName = (name === sortByColumn && sortByReverse) ? 'u-colorHighlight' : ''

    return (
      <TextLink location={ name } onClick={ this.handleSortClick } mods="u-flex">
        { this.renderSortLabel(label) }
        <div className="u-colorGrey u-fontSizeXs u-spaceLeftXs">
          <Icon name="up" mods={ `u-block ${ascLinkClassName}` } />
          <Icon name="down" mods={ `u-block ${descLinkClassName}` } />
        </div>
      </TextLink>
    )
  }

  renderColumnHeader = column => {
    const children = column.isSortable
      ? this.renderSortLink(column.name, column.label)
      : this.renderSortLabel(column.label)

    return (
      <PanelCell key={ column.name } mods={ column.mods } style={ column.style } isTitle>
        { children }
      </PanelCell>
    )
  }

  renderColumn = (column, row) => {
    const data = row[column.name]
    const children = column.render ? column.render(column, row) : data

    return (
      <PanelCell key={ `${row.id}-${column.name}` } mods={ column.mods } style={ column.style }>
        { children }
      </PanelCell>
    )
  }

  renderRow = row => {
    const { columns } = this.props

    return (
      <PanelRow key={ row.id } isWithCells>
        { columns.map(column => this.renderColumn(column, row)) }
      </PanelRow>
    )
  }

  render() {
    const { columns, isStriped, className, mods, style } = this.props
    const { items } = this.state

    return (
      <Panel className={ className } mods={ mods } isStriped={ isStriped } style={ style }>
        <PanelBody>
          <PanelRow isWithCells>{ columns.map(this.renderColumnHeader) }</PanelRow>
          { items.map(this.renderRow) }
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
      mods: PropTypes.string,
      style: PropTypes.object
    })
  ),
  rows: PropTypes.arrayOf(PropTypes.object),
  defaultSort: PropTypes.string,
  isStriped: PropTypes.bool,
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object
}

Table.defaultProps = {
  columns: [],
  rows: [],
  defaultSort: null,
  isStriped: true,
  className: 'Panel',
  mods: null,
  style: {}
}

export default Table
