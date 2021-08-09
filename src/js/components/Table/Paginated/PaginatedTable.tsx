import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Table } from '../../Table';
import { convertObjsToValueLabel, usePagination } from './helpers';
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
import DateFilter from './DateFilter';

interface BulkAction {
  label: string;
  onSelected: (selected: any) => void;
  disabled?: boolean;
}

type FilterType = 'select' | 'date';

const FilterContext = React.createContext<{
  activeFilters: any;
  setActiveFilters: (filters: any) => void;
}>({
  activeFilters: {},
  setActiveFilters: () => {},
});

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
  mapDataToRow: PropTypes.func.isRequired,
  paginationPlacement: PropTypes.oneOf([Placement.Top, Placement.Bottom]),
  rowsAreSelectable: PropTypes.bool,
  searchPlaceholder: PropTypes.string,
  totalItems: PropTypes.number.isRequired,
};

const Filter = (
  fieldName: string,
  label: string,
  items?: { [key: string]: string },
  type: FilterType = 'select'
) => {
  return ({ isLast }) => {
    const ctx = React.useContext(FilterContext);

    const onChange = (values) => {
      ctx.setActiveFilters({ ...ctx.activeFilters, [fieldName]: values });
    };

    return type === 'select' ? (
      <ComboBox
        mods={isLast ? '' : 'u-spaceRightSm'}
        onChange={onChange}
        name={fieldName}
        buttonLabel={label}
        items={convertObjsToValueLabel(items)}
      />
    ) : (
      <DateFilter
        mods={isLast ? '' : 'u-spaceRightSm'}
        onChange={onChange}
        name={fieldName}
        title={label}
      />
    );
  };
};

type PaginatedTableProps = React.FunctionComponent<PropTypes.InferProps<typeof propTypes>> & {
  Filter: typeof Filter;
};
const PaginatedTable: PaginatedTableProps = ({
  loadData,
  columns,
  mapDataToRow,
  defaultPage,
  defaultItemsPerPage,
  totalItems,
  hideRowsSelect,
  rowsAreSelectable = false,
  bulkActions,
  filters = [],
  customSearchFilter,
  includeBasicSearch,
  searchPlaceholder,
  paginationPlacement,
}) => {
  assert(
    !(filters.length && paginationPlacement === Placement.Top),
    'Invalid State: Pagination Positioning Top + Filters'
  );

  const [[itemsPerPage, setItemsPerPage], [currentPage, setCurrentPage]] = usePagination(
    defaultItemsPerPage || 10,
    defaultPage || 1
  );
  const [dataSet, setDataSet] = React.useState([]);
  const [sortName, setSortName] = React.useState('');
  const [sortAscending, setSortAscending] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [selected, setSelected] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [filterOpen, setFilterOpen] = React.useState(false);
  const [activeFilters, setActiveFilters] = React.useState({});
  const shouldPaginateAtTop = paginationPlacement !== Placement.Bottom && filters.length === 0;

  const setNewItemsPerPage = (newItemsPerPage) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  };

  const defaultPageSizeOptions = [10, 25, 50];
  const customOptions =
    defaultPageSizeOptions.indexOf(defaultItemsPerPage) < 0 ? [defaultItemsPerPage] : [];
  const pageSizeOptions = defaultPageSizeOptions.concat(customOptions).sort((a, b) => {
    return a - b;
  });

  React.useEffect(() => {
    setIsLoading(true);

    loadData({
      page: currentPage,
      itemsPerPage,
      sortBy: sortName,
      sortAsc: sortAscending,
      filter:
        includeBasicSearch || activeFilters ? { searchTerm: searchTerm, ...activeFilters } : null,
    }).then((data) => {
      setDataSet(data);
      setIsLoading(false);
    });
  }, [itemsPerPage, currentPage, sortName, sortAscending, searchTerm, activeFilters]);

  let rows = dataSet.map(mapDataToRow);

  let checkboxState = CheckboxStates.FALSE;
  if (selected.length != 0 && selected.length != rows.length) {
    // some but not all rows are checked
    checkboxState = CheckboxStates.INDETERMINATE;
  }
  if (selected.length != 0 && selected.length == rows.length) {
    // all rows are checked
    checkboxState = CheckboxStates.TRUE;
  }

  let cols = columns;
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
                onClick: () => {
                  // if there is at least one row checked, clear all
                  if (checkboxState != CheckboxStates.FALSE) {
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
    rows = rows.map((ele) =>
      Object.assign({}, ele, {
        selected: (
          <div>
            <Checkbox
              name={`select-${ele.id}`}
              mods="u-padBottomNone"
              inputProps={{
                checked: selectedids.includes(ele.id),
                onClick: () => {
                  if (selectedids.includes(ele.id)) {
                    setSelected(selected.filter((e) => e.id != ele.id));
                  } else {
                    setSelected([...selected, ele]);
                  }
                },
              }}
            />
          </div>
        ),
      })
    );
  }

  // collisions overwrite
  const bulkActionFuncsByLabel = bulkActions?.reduce((acc, action: BulkAction) => {
    acc[action.label] = action.onSelected;
    return acc;
  }, {});

  const updateSearchFilter = ({ searchTerm }) => {
    setCurrentPage(1);
    setSearchTerm(searchTerm);
  };

  React.useEffect(() => {
    setCurrentPage(1);
  }, [activeFilters]);

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
        mods={paginationPlacement == Placement.Bottom ? 'u-flexJustifyCenter u-flexGrow1' : ''}
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

  const filterButton = (
    <div>
      <Button
        isActive={filterOpen}
        onClick={() => setFilterOpen(!filterOpen)}
        mods="u-spaceLeftSm"
        icon="wrench"
      >
        Filter
      </Button>
    </div>
  );

  return (
    <div className="Grid">
      <div className="Grid Grid-cell u-spaceTopSm">
        {bulkActions?.length > 0 ? (
          <div className="Grid-cellu-spaceRightXs u-flex u-size1of1 u-md-size1of12 u-flexJustifyStart">
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
          {customSearchFilter || includeBasicSearch ? (
            customSearchFilter ? (
              customSearchFilter
            ) : (
              <BasicSearch
                searchPlaceholder={searchPlaceholder}
                searchFunction={updateSearchFilter}
              />
            )
          ) : null}
        </div>
        {shouldPaginateAtTop && paginationItems}
        {!shouldPaginateAtTop && filterButton}
      </div>
      <FilterContext.Provider value={{ activeFilters, setActiveFilters }}>
        {filterOpen && (
          <Panel mods="u-padSm u-spaceTopSm u-borderNeutral4 u-bgNeutral1 Grid-cell">
            {filters.map((Item, index) => (
              <Item key={index} isLast={index === filters.length - 1} />
            ))}
          </Panel>
        )}
        <div className="Grid-cell u-spaceTopSm">
          <Table
            columns={cols}
            rows={rows}
            externalSortingFunction={(name, ascending) => {
              setSortName(name);
              setSortAscending(ascending);
            }}
            isLoading={isLoading}
          />
        </div>
      </FilterContext.Provider>
      {(paginationPlacement === Placement.Bottom || !shouldPaginateAtTop) && paginationItems}
    </div>
  );
};

PaginatedTable.Filter = Filter;
PaginatedTable.propTypes = propTypes;

export default PaginatedTable;
