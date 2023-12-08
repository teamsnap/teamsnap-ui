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

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { capitalize, getClassName } from '../../utils/helpers';
import { sortBy as sortByFn } from '../../utils/sort';
import { Icon } from '../Icon';
import { Panel } from '../Panel';
import { PanelBody } from '../PanelBody';
import { PanelRow } from '../PanelRow';
import { PanelCell } from '../PanelCell';
import { TextLink } from '../TextLink';
import { Loader } from '../Loader';

const propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
      render: PropTypes.func,
      isSortable: PropTypes.bool,
      sortType: PropTypes.string,
      sortFn: PropTypes.func,
      align: PropTypes.oneOf(['right', 'left', 'center']),
      mods: PropTypes.string,
      style: PropTypes.object,
      otherProps: PropTypes.object,
      testId: PropTypes.string,
    })
  ),
  rows: PropTypes.arrayOf(PropTypes.object),
  defaultSort: PropTypes.string,
  externalSortingFunction: PropTypes.func,
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object,
  testId: PropTypes.string,
  otherProps: PropTypes.object,
  maxTableHeight: PropTypes.string,
  isLoading: PropTypes.bool,
  placeHolder: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

type Props = PropTypes.InferProps<typeof propTypes>;

const sortItems = (
  sortColumns: any[],
  newItems: any[],
  sortByColumn: string,
  sortByReverse: boolean
) => {
  const sortColumn = sortColumns.find((c) => c.name === sortByColumn);

  if (!sortColumn) {
    return newItems;
  }

  const { name, sortType, sortFn } = sortColumn;
  return sortByFn(newItems, {
    name,
    sortType,
    sortFn,
    isReverse: sortByReverse,
  });
};

const Table = ({
  className,
  mods,
  style,
  testId,
  otherProps,
  maxTableHeight,
  placeHolder,
  isLoading,
  columns,
  externalSortingFunction,
  defaultSort,
  rows,
}: Props) => {
  const [items, setItems] = React.useState([]);
  const [sortBy, setSortBy] = React.useState<string>(null);
  const [sortDirection, setSortDirection] = React.useState<'up' | 'down'>('down');

  // We should remove this effect and create a prop called defaultSortDirection
  React.useEffect(() => {
    const sortDir = defaultSort.charAt(0) === '-';
    const sortName = sortDir ? defaultSort.substr(1) : defaultSort;

    setSortDirection(sortDir ? 'up' : 'down');
    setSortBy(sortName);
  }, [defaultSort]);

  React.useEffect(() => {
    setItems(rows);
  }, [rows, setItems]);

  const handleSortClick = (e) => {
    e.preventDefault();
    const sortName = e.currentTarget.getAttribute('href');
    const isCurrentSortedColumn = sortName === sortBy;
    const sortDir = isCurrentSortedColumn && sortDirection === 'down';

    // If an function is provided here, we let the parent component figure out the sorting
    // This is valuable when we sort beyond the data thats currently in the table
    // IE: We keep data on the server and want to sort against that or are supporting pagination.
    setSortDirection(sortDir ? 'up' : 'down');
    if (externalSortingFunction != null) {
      setSortBy(sortName);
      externalSortingFunction(sortName, sortDir);
    } else {
      const tableState = sortItems(columns, items, sortName, sortDir);

      setItems(tableState);
      setSortBy(sortName);
    }
  };

  const renderPanelCell = (role, children, column) => {
    const cellMods = getClassName(
      `u-text${capitalize(column.align || 'Left')}`,
      column.mods,
      role === 'columnheader' && column.isSortable ? 'Panel-cell--sortable' : ''
    );

    return (
      <PanelCell
        key={column.key}
        mods={cellMods}
        role={role}
        style={column.style}
        isTitle={column.isTitle}
        {...column.otherProps}
        testId={`${column.testId} row`}
      >
        {children}
      </PanelCell>
    );
  };

  const renderColumn = (column, row) => {
    const data = row[column.name];
    const children = column.render ? column.render(column, row) : data;

    return renderPanelCell('cell', children, {
      key: `${row.id}-${column.name}`,
      itTitle: false,
      ...column,
    });
  };

  const columnsJsx = columns.map((column) => {
    const activeColumn = items.length && column.name === sortBy;

    const textLinkMods = getClassName(
      'u-flex',
      'u-flexAlignItemsCenter',
      column.align === 'right' && 'u-flexJustifyEnd u-spaceNegativeRightSm',
      column.align === 'center' && 'u-flexJustifyCenter'
    );

    const children = column.isSortable ? (
      <TextLink
        location={column.name}
        onClick={handleSortClick}
        mods={textLinkMods}
        otherProps={{ 'data-testid': `${column.testId} columnheader` }}
      >
        <span className="u-colorInfo u-textNoWrap u-flex u-flexAlignItemsCenter">
          {column.label}
        </span>
        <div className="u-colorNeutral5 u-fontSizeXs u-spaceLeftXs">
          <Icon
            name={activeColumn ? sortDirection : 'down'}
            mods={activeColumn && 'u-colorPrimary'}
          />
        </div>
      </TextLink>
    ) : (
      <span
        data-testid={`${column.testId} columnheader`}
        className={`u-colorInfo u-textNoWrap u-flex u-flexAlignItemsCenter ${textLinkMods}`}
      >
        {column.label}
      </span>
    );

    return renderPanelCell('columnheader', children, {
      key: column.name,
      isTitle: true,
      ...column,
    });
  });

  const withMaxTableHeight = { height: maxTableHeight, overflow: 'scroll' };

  return (
    <Panel className={className} mods={mods} style={style} testId={testId} {...otherProps}>
      <PanelBody role="table">
        <PanelRow isWithCells>{columnsJsx}</PanelRow>
        {isLoading ? (
          <div className="u-padMd u-textCenter">
            <Loader type="spin" text="loading..." />
          </div>
        ) : (
          <>
            {!items.length ? (
              <div className="u-padMd u-textCenter">{placeHolder}</div>
            ) : (
              <div style={maxTableHeight ? withMaxTableHeight : null}>
                {items.map((row, index) => (
                  <PanelRow
                    key={row.id}
                    isWithCells
                    className={
                      row.selected && row.onClick ? 'Panel-row Panel-row--selectable' : 'Panel-row'
                    }
                    otherProps={{ onClick: row.onClick ? row.onClick : null }}
                    testId={`table-panel-row-${index}`}
                  >
                    {columns.map((column) => renderColumn(column, row))}
                  </PanelRow>
                ))}
              </div>
            )}
          </>
        )}
      </PanelBody>
    </Panel>
  );
};

Table.defaultProps = {
  columns: [],
  rows: [],
  defaultSort: '',
  className: 'Panel',
  mods: null,
  style: {},
  testId: null,
  otherProps: {},
  placeHolder: 'Nothing to see here',
  maxTableHeight: null,
  isLoading: false,
};

export default Table;
