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

import * as React from "react";
import * as PropTypes from "prop-types";
import { setUniqueId, capitalize, getClassName } from "../../utils/helpers";
import { sortBy } from "../../utils/sort";
import { Icon } from "../Icon";
import { Panel } from "../Panel";
import { PanelBody } from "../PanelBody";
import { PanelRow } from "../PanelRow";
import { PanelCell } from "../PanelCell";
import { TextLink } from "../TextLink";
import { Loader } from "../Loader";

class Table extends React.PureComponent<any, any> {
  static defaultProps = {
    columns: [],
    rows: [],
    defaultSort: "",
    isStriped: true,
    className: "Panel",
    mods: null,
    style: {},
    otherProps: {},
    placeHolder: "Nothing to see here",
    maxTableHeight: null,
    isLoading: false
  };

  static propTypes = {
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        label: PropTypes.string,
        render: PropTypes.func,
        isSortable: PropTypes.bool,
        sortType: PropTypes.string,
        sortFn: PropTypes.func,
        align: PropTypes.oneOf(["right", "left", "center"]),
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
    otherProps: PropTypes.object,
    maxTableHeight: PropTypes.string,
    isLoading: PropTypes.bool,
    placeHolder: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
  };

  state = {
    items: [],
    sortByColumn: "",
    sortByReverse: false
  };

  componentWillMount() {
    const { rows, defaultSort } = this.props;

    // Establish initial sortDirection by checking for '-' value
    const sortDirection = defaultSort.charAt(0) === "-" ? true : false;
    const sortName = sortDirection ? defaultSort.substr(1) : defaultSort;

    this.setTableState(rows, sortName, sortDirection);
  }

  componentWillReceiveProps(nextProps) {
    const { sortByColumn, sortByReverse } = this.state;

    this.setTableState(nextProps.rows, sortByColumn, sortByReverse);
  }

  setTableState = (rows, sortName, sortDirection) => {
    const items = setUniqueId(rows);

    const tableState = sortName
      ? this.sortItems(items, sortName, sortDirection)
      : { items };

    this.setState({ ...tableState });
  };

  sortItems = (newItems, sortByColumn, sortByReverse) => {
    const { columns } = this.props;

    const { name, sortType, sortFn } = columns.find(
      c => c.name === sortByColumn
    );
    const items = sortBy(newItems, {
      name,
      sortType,
      sortFn,
      isReverse: sortByReverse
    });

    return { items, sortByColumn, sortByReverse };
  };

  handleSortClick = e => {
    e.preventDefault();
    const { items } = this.state;
    const sortName = e.currentTarget.getAttribute("href");

    const sortDirection =
      sortName === this.state.sortByColumn ? !this.state.sortByReverse : false;
    const tableState = this.sortItems(items, sortName, sortDirection);

    this.setState({ ...tableState });
  };

  renderSortLabel = label => (
    <span className="u-colorInfo u-textNoWrap">{label}</span>
  );

  renderSortLink = column => {
    const { items, sortByColumn, sortByReverse } = this.state;
    const activeColumn = items.length && column.name === sortByColumn;

    const ascLinkMods = getClassName(
      "u-block",
      activeColumn && !sortByReverse && "u-colorHighlight"
    );
    const descLinkMods = getClassName(
      "u-block",
      activeColumn && sortByReverse && "u-colorHighlight"
    );

    const textLinkMods = getClassName(
      "u-flex",
      column.align === "right" && "u-flexJustifyEnd u-spaceNegativeRightSm",
      column.align === "center" && "u-flexJustifyCenter"
    );

    return (
      <TextLink
        location={column.name}
        onClick={this.handleSortClick}
        mods={textLinkMods}
      >
        {this.renderSortLabel(column.label)}
        <div className="u-colorGrey u-fontSizeXs u-spaceLeftXs">
          <Icon name="up" mods={ascLinkMods} />
          <Icon name="down" mods={descLinkMods} />
        </div>
      </TextLink>
    );
  };

  renderPanelCell = (children, column) => {
    const cellMods = getClassName(
      column.mods,
      `u-text${capitalize(column.align || "Left")}`
    );

    return (
      <PanelCell
        key={column.key}
        mods={cellMods}
        style={column.style}
        isTitle={column.isTitle}
        {...column.otherProps}
      >
        {children}
      </PanelCell>
    );
  };

  renderColumn = (column, row) => {
    const data = row[column.name];
    const children = column.render ? column.render(column, row) : data;

    return this.renderPanelCell(children, {
      key: `${row.id}-${column.name}`,
      itTitle: false,
      ...column
    });
  };

  renderHeaderColumn = column => {
    const children = column.isSortable
      ? this.renderSortLink(column)
      : this.renderSortLabel(column.label);

    return this.renderPanelCell(children, {
      key: column.name,
      isTitle: true,
      ...column
    });
  };

  renderRow = row => {
    const { columns } = this.props;

    return (
      <PanelRow key={row.id} isWithCells>
        {columns.map(column => this.renderColumn(column, row))}
      </PanelRow>
    );
  };

  renderTableColumns = () => {
    const { columns } = this.props;
    return columns.map(this.renderHeaderColumn);
  };

  renderTableRows = (placeHolder, isLoading) => {
    const { items } = this.state;
    if (isLoading) {
      return (
        <div className="u-padMd u-textCenter">
          <Loader type="spin" text="loading..." />
        </div>
      );
    }
    if (!isLoading && items.length) {
      return items.map(this.renderRow);
    }
    return <div className="u-padMd u-textCenter">{placeHolder}</div>;
  };

  render() {
    const {
      isStriped,
      className,
      mods,
      style,
      otherProps,
      maxTableHeight,
      placeHolder,
      isLoading
    } = this.props;

    return (
      <Panel
        className={className}
        mods={mods}
        isStriped={isStriped}
        style={style}
        {...otherProps}
      >
        <PanelBody>
          <PanelRow isWithCells>{this.renderTableColumns()}</PanelRow>
          {maxTableHeight && (
            <div style={{ height: maxTableHeight, overflow: "scroll" }}>
              {this.renderTableRows(placeHolder, isLoading)}
            </div>
          )}
          {!maxTableHeight && this.renderTableRows(placeHolder, isLoading)}
        </PanelBody>
      </Panel>
    );
  }
}

export default Table;
