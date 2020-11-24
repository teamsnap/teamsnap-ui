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

interface State {
  items: any[];
  sortByColumn?: any;
  sortByReverse?: any;
}

class Table extends React.PureComponent<
  PropTypes.InferProps<typeof Table.propTypes>,
  State
> {
  static defaultProps = {
    columns: [],
    rows: [],
    defaultSort: "",
    className: "Panel",
    mods: null,
    style: {},
    otherProps: {},
    placeHolder: "Nothing to see here",
    maxTableHeight: null,
    isLoading: false,
  };

  static propTypes = {
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        render: PropTypes.func,
        isSortable: PropTypes.bool,
        sortType: PropTypes.string,
        sortFn: PropTypes.func,
        align: PropTypes.oneOf(["right", "left", "center"]),
        mods: PropTypes.string,
        style: PropTypes.object,
        otherProps: PropTypes.object,
      })
    ),
    rows: PropTypes.arrayOf(PropTypes.object),
    defaultSort: PropTypes.string,
    externalSortingFunction: PropTypes.func,
    className: PropTypes.string,
    mods: PropTypes.string,
    style: PropTypes.object,
    otherProps: PropTypes.object,
    maxTableHeight: PropTypes.string,
    isLoading: PropTypes.bool,
    placeHolder: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  };

  constructor(props) {
    super(props);
    const { defaultSort } = this.props;

    // Establish initial sortDirection by checking for '-' value
    const sortDirection = defaultSort.charAt(0) === "-" ? true : false;
    const sortName = sortDirection ? defaultSort.substr(1) : defaultSort;

    const state = Table.getTableState(props, sortName, sortDirection);
    this.state = { ...state };
  }

  static getDerivedStateFromProps(props, state) {
    const { sortByColumn, sortByReverse } = state;

    return Table.getTableState(props, sortByColumn, sortByReverse);
  }

  private static getTableState(
    props: PropTypes.InferProps<typeof Table.propTypes>,
    sortName: string,
    sortDirection: boolean
  ) {
    const { rows } = props;
    const items = setUniqueId(rows);

    const tableState = sortName
      ? Table.sortItems(props, items, sortName, sortDirection)
      : { items };

    return tableState;
  }

  static sortItems = (
    props: PropTypes.InferProps<typeof Table.propTypes>,
    newItems: any[],
    sortByColumn: string,
    sortByReverse: boolean
  ) => {
    const { columns } = props;

    const sortColumn = columns.find((c) => c.name === sortByColumn);
    let items = newItems;
    if (sortColumn) {
      const { name, sortType, sortFn } = sortColumn;
      items = sortBy(newItems, {
        name,
        sortType,
        sortFn,
        isReverse: sortByReverse,
      });
    }

    return { items, sortByColumn, sortByReverse };
  };

  handleSortClick = (e) => {
    e.preventDefault();
    const { items } = this.state;
    const sortName = e.currentTarget.getAttribute("href");

    const sortDirection =
      sortName === this.state.sortByColumn ? !this.state.sortByReverse : false;

    // If an function is provided here, we let the parent component figure out the sorting
    // This is valuable when we sort beyond the data thats currently in the table
    // IE: We keep data on the server and want to sort against that or are supporting pagination.
    if (this.props.externalSortingFunction != null) {
      this.props.externalSortingFunction(sortName, sortDirection);
      const state = Table.getTableState(this.props, sortName, sortDirection);
      this.setState(state);
    } else {
      const tableState = Table.sortItems(
        this.props,
        items,
        sortName,
        sortDirection
      );

      this.setState({ ...tableState });
    }
  };

  renderSortLabel = (label) => (
    <span className="u-colorInfo u-textNoWrap u-flex u-flexAlignItemsCenter">{label}</span>
  );

  renderSortLink = (column) => {
    const { items, sortByColumn, sortByReverse } = this.state;
    const activeColumn = items.length && column.name === sortByColumn;

    const ascLinkMods = getClassName(
      activeColumn && !sortByReverse && "u-colorHighlight"
    );
    const descLinkMods = getClassName(
      activeColumn && sortByReverse && "u-colorHighlight"
    );

    const textLinkMods = getClassName(
      "u-flex",
      "u-flexAlignItemsCenter",
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
        <div className="u-colorNeutral5 u-fontSizeXs u-spaceLeftXs">
          {sortByReverse ? <Icon name="up" mods={ascLinkMods} /> :
          <Icon name="down" mods={descLinkMods} /> }
        </div>
      </TextLink>
    );
  };

  renderPanelCell = (role, children, column) => {
    const cellMods = getClassName(
      column.mods,
      `u-text${capitalize(column.align || "Left")}`
    );

    return (
      <PanelCell
        key={column.key}
        mods={cellMods}
        role={role}
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

    return this.renderPanelCell("cell", children, {
      key: `${row.id}-${column.name}`,
      itTitle: false,
      ...column,
    });
  };

  renderHeaderColumn = (column) => {
    const children = column.isSortable
      ? this.renderSortLink(column)
      : this.renderSortLabel(column.label);

    return this.renderPanelCell("columnheader", children, {
      key: column.name,
      isTitle: true,
      ...column,
    });
  };

  renderRow = (row) => {
    const { columns } = this.props;

    return (
      <PanelRow key={row.id} isWithCells>
        {columns.map((column) => this.renderColumn(column, row))}
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
      className,
      mods,
      style,
      otherProps,
      maxTableHeight,
      placeHolder,
      isLoading,
    } = this.props;

    return (
      <Panel
        className={className}
        mods={mods}
        style={style}
        {...otherProps}
      >
        <PanelBody role="table">
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
