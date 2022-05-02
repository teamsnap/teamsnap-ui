import * as React from 'react';
import * as PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import Table from '../Table';
import { convertObjsToValueLabel, getCheckboxStateForBulkActions, usePagination } from './helpers';
import {
  PaginationCurrentSubsetDisplay,
  PaginationSelect,
  PaginationButtons,
} from '../../Pagination';
import { Checkbox } from '../../Checkbox';
import { CheckboxStates } from '../../../types';
import { Select } from '../../Select';
import BasicSearch from './BasicSearch';
import { Placement } from '../../../types/placement';
import ComboBox from '../../ComboBox/Combobox';
import { assert } from '../../../utils/assert';
import { Button } from '../../Button';
import { Panel } from '../../Panel';
import { exportToCsv } from '../../../utils/export';
import FilterContext from '../../../context/filterContext';

// eslint-disable-next-line import/no-named-default
import { default as DateFilterComponent } from './DateFilter';

interface BulkAction {
  label: string;
  onSelected: (selected: any) => void;
  disabled?: boolean;
}

const propTypes = {
  bulkActions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      onSelected: PropTypes.func.isRequired,
      disabled: PropTypes.bool,
    })
  ),
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
      isSortable: PropTypes.bool,
      align: PropTypes.string,
      mods: PropTypes.string,
    })
  ).isRequired,
  customSearchFilter: PropTypes.any,
  defaultItemsPerPage: PropTypes.number,
  defaultPage: PropTypes.number,
  filters: PropTypes.arrayOf(PropTypes.func),
  hideRowsSelect: PropTypes.bool,
  includeBasicSearch: PropTypes.bool,
  loadData: PropTypes.func.isRequired,
  /**
   * @param {any} reloadDependency - The Table is reloaded every time this value changes
   */
  reloadDependency: PropTypes.any,
  mapDataToRow: PropTypes.func.isRequired,
  paginationPlacement: PropTypes.oneOf([Placement.Top, Placement.Bottom, Placement.RightBottom]),
  rowsAreSelectable: PropTypes.bool,
  isLoading: PropTypes.bool,
  searchPlaceholder: PropTypes.string,
  defaultSort: PropTypes.string,
  noResultsText: PropTypes.string,
  rowSelected: PropTypes.func,
  shouldClearSelectedRows: PropTypes.bool,
  onExport: PropTypes.func,
  useExternalFilterProvider: PropTypes.bool,
  fullRowSelect: PropTypes.bool,
};

const SelectFilter = (
  fieldName: string,
  label: string,
  options?:
    | { [key: string]: string | React.ReactNode }
    | { value: string; label: string; subtext?: string }[],
  tooltip?: JSX.Element,
  tooltipLink?: string
) => {
  return ({ isLast }: { isLast: boolean }) => {
    const ctx = React.useContext(FilterContext);

    const onChange = (values) => {
      if (values?.length > 0 || values?.kind) {
        ctx.setActiveFilters({ ...ctx.activeFilters, [fieldName]: values });
      } else {
        delete ctx.activeFilters[fieldName];
        ctx.setActiveFilters({ ...ctx.activeFilters });
      }
    };

    return (
      <ComboBox
        mods={isLast ? '' : 'u-spaceRightSm'}
        onChange={onChange}
        selected={ctx.activeFilters[fieldName]}
        name={fieldName}
        buttonLabel={label}
        items={
          options.length
            ? (options as { value: string; label: string; subtext?: string }[])
            : convertObjsToValueLabel(options as { [key: string]: string | React.ReactNode })
        }
        tooltip={tooltip}
        tooltipLink={tooltipLink}
      />
    );
  };
};

const DateFilter = (
  fieldName: string,
  label: string,
  noDateLabel?: string,
  yearPlaceholder?: string,
  rangeMin?: string,
  rangeMax?: string
) => {
  return ({ isLast }: { isLast: boolean }) => {
    const ctx = React.useContext(FilterContext);

    const onChange = (values) => {
      if (values?.length > 0 || values?.kind) {
        ctx.setActiveFilters({ ...ctx.activeFilters, [fieldName]: values });
      } else {
        delete ctx.activeFilters[fieldName];
        ctx.setActiveFilters({ ...ctx.activeFilters });
      }
    };

    return (
      <DateFilterComponent
        mods={isLast ? '' : 'u-spaceRightSm'}
        onChange={onChange}
        name={fieldName}
        title={label}
        noDateLabel={noDateLabel}
        yearPlaceholder={yearPlaceholder}
        rangeMin={rangeMin}
        rangeMax={rangeMax}
      />
    );
  };
};

type PaginatedTableProps = React.FunctionComponent<PropTypes.InferProps<typeof propTypes>> & {
  SelectFilter: typeof SelectFilter;
  DateFilter: typeof DateFilter;
};

const PaginatedTable: PaginatedTableProps = ({
  loadData,
  reloadDependency,
  columns,
  mapDataToRow,
  defaultPage,
  defaultItemsPerPage,
  hideRowsSelect,
  rowsAreSelectable = false,
  bulkActions,
  filters = [],
  customSearchFilter,
  includeBasicSearch,
  searchPlaceholder,
  paginationPlacement,
  defaultSort,
  noResultsText,
  rowSelected,
  shouldClearSelectedRows,
  onExport = null,
  isLoading,
  useExternalFilterProvider,
  fullRowSelect = false,
}) => {
  assert(
    !(filters.length && paginationPlacement === Placement.Top),
    'Invalid State: Pagination Positioning Top + Filters'
  );

  const [[itemsPerPage, setItemsPerPage], [currentPage, setCurrentPage]] = usePagination(
    defaultItemsPerPage || 10,
    defaultPage || 1
  );
  const [totalItems, setTotalItems] = React.useState<number>(0);
  const [dataSet, setDataSet] = React.useState([]);
  const [sortName, setSortName] = React.useState('');
  const [sortAscending, setSortAscending] = React.useState(false);
  const [isFetchingData, setIsFetchingData] = React.useState(false);
  const [selected, setSelected] = React.useState([]);
  const [filterOpen, setFilterOpen] = React.useState(false);
  const [isResettingFilters, setIsResettingFilters] = React.useState(false);
  const shouldDisplayPaginationAtBottom =
    paginationPlacement === Placement.Bottom || paginationPlacement === Placement.RightBottom;
  const shouldPaginateAtTop = !shouldDisplayPaginationAtBottom && filters.length === 0;
  const defaultPageSizeOptions = [10, 25, 50];
  const customOptions =
    defaultPageSizeOptions.indexOf(defaultItemsPerPage) < 0 ? [defaultItemsPerPage] : [];
  const pageSizeOptions = defaultPageSizeOptions.concat(customOptions).sort((a, b) => {
    return a - b;
  });

  const filterContext = React.useContext(FilterContext);
  const localFilters = React.useState({});
  const localSearch = React.useState('');

  const { activeFilters, searchTerm, setSearchTerm, setActiveFilters } = useExternalFilterProvider
    ? filterContext
    : {
        activeFilters: localFilters[0],
        setActiveFilters: localFilters[1],
        searchTerm: localSearch[0],
        setSearchTerm: localSearch[1],
      };

  React.useEffect(() => {
    if (shouldClearSelectedRows) setSelected([]);
  }, [shouldClearSelectedRows]);

  const setNewItemsPerPage = (newItemsPerPage) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  };

  let rows = dataSet.map(mapDataToRow);
  let cols = columns;
  const checkboxState = getCheckboxStateForBulkActions(selected, rows);
  if (rowsAreSelectable) {
    cols = [
      {
        name: 'selected',
        label: (
          <div>
            <Checkbox
              name="select-all"
              mods="u-padBottomNone"
              inputProps={{
                checked: checkboxState,
                onChange: () => {
                  // if there is at least one row checked, clear all
                  if (checkboxState !== CheckboxStates.FALSE) {
                    setSelected([]);
                  } else {
                    // select all rows if none are checked
                    setSelected(rows);
                  }
                },
              }}
            />
          </div>
        ),
        mods: 'u-size1of12',
      },
      ...cols,
    ];

    // use IDs as keys to determine uniqueness
    const selectedids = selected.map((e) => e.id);
    rows = rows.map((ele) => {
      const rowData = {
        ...ele,
        selected: (
          <div>
            <Checkbox
              name={`select-${ele.id}`}
              mods="u-padBottomNone"
              inputProps={{
                checked: selectedids.includes(ele.id),
                onChange: () => {},
                onClick: () => {
                  if (selectedids.includes(ele.id)) {
                    setSelected(selected.filter((e) => e.id !== ele.id));
                  } else {
                    setSelected([...selected, ele]);
                  }
                },
              }}
            />
          </div>
        ),
      };

      if (rowData.selected && fullRowSelect) {
        rowData.onClick = () => {
          if (selectedids.includes(ele.id)) {
            setSelected(selected.filter((e) => e.id !== ele.id));
          } else {
            setSelected([...selected, ele]);
          }
        };
      }
      return rowData;
    });
  }

  // collisions overwrite
  const bulkActionFuncsByLabel = bulkActions?.reduce((acc, action: BulkAction) => {
    acc[action.label] = action.onSelected;
    return acc;
  }, {});

  const filterLength = Object.entries(activeFilters).length;
  const defaultSortStr = sortName.length ? `${sortAscending ? '-' : ''}${sortName}` : defaultSort;

  const updateSearchFilter = ({ searchTerm: search }) => {
    setCurrentPage(1);
    setSearchTerm(search);
  };

  // Load new data when the metadata around pagination changes
  React.useEffect(() => {
    setIsFetchingData(true);

    if (!isEmpty(activeFilters)) {
      setFilterOpen(true);
    }

    loadData({
      page: currentPage,
      itemsPerPage,
      sortBy: sortName,
      sortAsc: sortAscending,
      filter: includeBasicSearch || activeFilters ? { searchTerm, ...activeFilters } : null,
    }).then(({ data, totalItems: currentTotalItems }) => {
      setIsFetchingData(false);
      if (data) setDataSet(data);

      if (typeof currentTotalItems === 'number') setTotalItems(currentTotalItems);
    });
  }, [
    itemsPerPage,
    currentPage,
    sortName,
    sortAscending,
    searchTerm,
    activeFilters,
    reloadDependency,
  ]);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [activeFilters]);

  React.useEffect(() => {
    if (isResettingFilters) setIsResettingFilters(false);
  }, [isResettingFilters]);

  React.useEffect(() => {
    if (rowSelected) {
      rowSelected(selected);
    }
  }, [selected]);

  const paginationItems = (
    <div
      className={`Grid-cell u-flex u-flexJustifyEnd ${
        !shouldPaginateAtTop ? 'u-sizeFill u-sizeFull' : 'u-sizeFit'
      }`}
    >
      <div className="u-spaceAuto u-spaceRightSm">
        <PaginationCurrentSubsetDisplay
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          totalItems={totalItems}
        />
      </div>
      <PaginationButtons
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        mods={paginationPlacement === Placement.Bottom ? 'u-flexJustifyCenter u-flexGrow1' : ''}
      />
      {!hideRowsSelect ? (
        <div className="u-spaceLeftSm">
          <PaginationSelect
            options={pageSizeOptions}
            setItemsPerPage={setNewItemsPerPage}
            itemsPerPage={itemsPerPage}
          />
        </div>
      ) : null}
    </div>
  );

  const filtersSection = (
    <>
      <div className="u-size7of8">
        {filters.map((Item, index) => (
          <Item key={index} isLast={index === filters.length - 1} />
        ))}
      </div>
      <div className="u-size1of8 u-textRight u-spaceRightMd">
        <Button
          type="text"
          onClick={() => {
            setActiveFilters({});
            // This is a bit weird.
            // We were seeing issues updating the components successfully when clearing out all the filter
            // values. This, paired with the condition in the filter rendering, forces the filter section
            // to rerender when we clear out all the filters, ensuring that its rendering with the "freshest"
            // of values from the context.
            setIsResettingFilters(true);
          }}
        >
          Clear All
        </Button>
      </div>
    </>
  );

  const render = () => (
    <>
      <div className="Grid Grid-cell u-spaceTopSm">
        {bulkActions?.length > 0 ? (
          <div className="Grid-cell u-spaceRightSm u-flex u-size1of1 u-md-size2of12 u-flexJustifyStart">
            <Select
              inputProps={{
                value: '',
                onChange: (event) => {
                  const fn = bulkActionFuncsByLabel[event.target.value];
                  if (fn) {
                    fn(selected);
                  }
                },
              }}
              name="bulkActions"
              options={[
                {
                  label: selected.length > 0 ? `${selected.length} selected` : 'Actions',
                  value: null,
                },
                ...bulkActions.map((e) => ({
                  label: e.label,
                  value: e.label,
                  disabled: e.disabled || false,
                })),
              ]}
            />
          </div>
        ) : null}
        <div className="Grid-cell u-sizeFill u-md-size1of4">
          {customSearchFilter || includeBasicSearch
            ? customSearchFilter || (
                <BasicSearch
                  searchPlaceholder={searchPlaceholder}
                  searchFunction={updateSearchFilter}
                  searchValue={searchTerm}
                  setSearchValue={setSearchTerm}
                />
              )
            : null}
        </div>

        {shouldPaginateAtTop && paginationItems}

        {filters.length > 0 && (
          <div>
            <Button
              isActive={filterLength > 0 || filterOpen}
              onClick={() => {
                setFilterOpen(!filterOpen);
              }}
              mods="Button Button--primary u-spaceLeftSm"
              icon="wrench"
            >
              Filter{' '}
              {filterLength > 0 ? (
                <span
                  className="u-bgPrimary7 u-colorNeutral1 u-fontSizeXs"
                  style={{ borderRadius: '50px', padding: '1px 4px' }}
                >
                  {filterLength}
                </span>
              ) : null}
            </Button>
          </div>
        )}

        {onExport && (
          <div>
            <Button
              isActive={dataSet.length > 0}
              onClick={() => {
                onExport({
                  exportToCsv,
                  page: currentPage,
                  itemsPerPage,
                  sortBy: sortName,
                  sortAsc: sortAscending,
                  filter:
                    includeBasicSearch || activeFilters ? { searchTerm, ...activeFilters } : null,
                });
              }}
              mods="u-spaceLeftSm"
              icon="import"
            >
              Export
            </Button>
          </div>
        )}
      </div>
      <Panel
        mods={`${
          filterOpen ? '' : 'u-hidden'
        } u-padSm u-spaceTopSm u-borderNeutral4 u-bgNeutral1 Grid-cell u-flex`}
      >
        {filtersSection}
      </Panel>
      <div className="Grid-cell u-spaceTopSm">
        <Table
          columns={cols}
          rows={rows}
          defaultSort={defaultSortStr}
          externalSortingFunction={(name, ascending) => {
            setSortName(name);
            setSortAscending(ascending);
          }}
          isLoading={isLoading || isFetchingData}
          placeHolder={noResultsText}
        />
      </div>
      {shouldDisplayPaginationAtBottom && paginationItems}
    </>
  );

  return (
    <div className="Grid">
      {useExternalFilterProvider ? (
        render()
      ) : (
        <FilterContext.Provider
          value={{
            searchTerm,
            setSearchTerm,
            activeFilters,
            setActiveFilters,
          }}
        >
          {render()}
        </FilterContext.Provider>
      )}
    </div>
  );
};

PaginatedTable.SelectFilter = SelectFilter;
PaginatedTable.DateFilter = DateFilter;
PaginatedTable.propTypes = propTypes;

export default PaginatedTable;
