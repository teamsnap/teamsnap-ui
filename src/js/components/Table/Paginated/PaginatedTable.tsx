import * as React from "react";
import { Table } from "../../Table";
import { usePagination } from "./helpers";
import { PaginationCurrentSubsetDisplay, PaginationSelect, PaginationButtons } from "../../Pagination";
import { Checkbox } from "../../Checkbox";
import { CheckboxStates } from "../../../types";
import { Select } from "../../Select";
import BasicSearch from "./BasicSearch";
import { Placement } from "../../../types/placement";
import ComboBox from "../../../components/ComboBox/Combobox";

interface LoadDataObject {
  page: number;
  itemsPerPage: number;
  sortBy?: string;
  sortAsc?: boolean;
  filter?: object;
}

interface BulkAction {
  label: string;
  onSelected: (selected: any) => void;
  disabled?: boolean;
}
interface Props {
  loadData: (requestedPayload: LoadDataObject) => Promise<any[]>;
  columns: {
    name: string;
    label: string | React.ReactElement;
    isSortable?: boolean;
    align?: string;
    mods?: string;
  }[];
  mapDataToRow: (item: any, index: number) => { id: any };
  defaultPage?: number;
  defaultItemsPerPage?: number;
  totalItems: number;
  hideRowsSelect?: boolean;
  rowsAreSelectable?: boolean;
  bulkActions?: BulkAction[];
  filters?: React.ReactNode[];
  customSearchFilter?: any;
  includeBasicSearch?: boolean;
  searchPlaceholder?: string;
  paginationPlacement?: Placement;
}

const Filter = (name: string, label: string, items: string[]): React.ReactNode => {
  return <ComboBox name={name} buttonLabel={label} items={items} />
};


type PaginatedTableProps = React.FunctionComponent<Props> & { Filter: typeof Filter }
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
  const [
    [itemsPerPage, setItemsPerPage],
    [currentPage, setCurrentPage],
  ] = usePagination(defaultItemsPerPage || 10, defaultPage || 1);
  const [dataSet, setDataSet] = React.useState([]);
  const [sortName, setSortName] = React.useState("");
  const [sortAscending, setSortAscending] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [selected, setSelected] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");

  const setNewItemsPerPage = (newItemsPerPage) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  };

  const defaultPageSizeOptions = [10, 25, 50];
  const customOptions =
    defaultPageSizeOptions.indexOf(defaultItemsPerPage) < 0
      ? [defaultItemsPerPage]
      : [];
  const pageSizeOptions = defaultPageSizeOptions
    .concat(customOptions)
    .sort((a, b) => {
      return a - b;
    });

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await loadData({
        page: currentPage,
        itemsPerPage,
        sortBy: sortName,
        sortAsc: sortAscending,
        filter:
          includeBasicSearch || filters
            ? { searchTerm: searchTerm, ...filters }
            : null,
      });
      setDataSet(data);
      setIsLoading(false);
    };

    setIsLoading(true);
    fetchData();
  }, [
    itemsPerPage,
    currentPage,
    sortName,
    sortAscending,
    searchTerm,
    filters,
  ]);

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
        name: "selected",
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
        mods: "u-size1of12",
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
              name={ `select-${ele.id}` }
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
  const bulkActionFuncsByLabel = bulkActions?.reduce(
    (acc, action: BulkAction) => {
      acc[action.label] = action.onSelected;
      return acc;
    },
    {}
  );

  function updateSearchFilter({ searchTerm }) {
    setCurrentPage(1);
    setSearchTerm(searchTerm);
  }

  React.useEffect(() => {
    setCurrentPage(1);
  }, [customFilter]);

  const paginationItems = (
  <div className={ `Grid-cell u-spaceTopSm u-flex u-flexJustifyEnd ${paginationPlacement == Placement.Bottom ? "u-sizeFill u-sizeFull" : "u-sizeFit"}` }>
    <div className="u-spaceAuto u-spaceRightSm">
      <PaginationCurrentSubsetDisplay
        itemsPerPage={ itemsPerPage }
        currentPage={ currentPage }
        totalItems={ totalItems }
      />
    </div>
    <PaginationButtons
      totalItems={ totalItems }
      itemsPerPage={ itemsPerPage }
      currentPage={ currentPage }
      setCurrentPage={ setCurrentPage }
      mods={ paginationPlacement == Placement.Bottom ? "u-flexJustifyCenter u-flexGrow1" : "" }
    />
    { !hideRowsSelect ? (
      <div className="u-spaceLeftSm">
        <PaginationSelect
          options={ pageSizeOptions }
          setItemsPerPage={ setNewItemsPerPage }
          itemsPerPage={ itemsPerPage }
        />
      </div>
    ) : null }
  </div>
  );

  return (
    <div className="Grid">
      <div className="Grid Grid-cell">
        { bulkActions?.length > 0 ? (
          <div className="Grid-cell u-spaceTopSm u-spaceRightXs u-flex u-size1of1 u-md-size1of12 u-flexJustifyStart">
            <Select inputProps={{
              value: "",
              onChange: (event) => {
                const fn = bulkActionFuncsByLabel[event.target.value];
                if (fn) {
                  fn(selected);
                }
              }
            }}
            name="bulkActions"
            options={ [
              { label: selected.length > 0 ? `${selected.length} selected` : "Actions", value: null },
              ...bulkActions.map((e) => ({
                label: e.label,
                value: e.label,
                disabled: e.disabled || false,
              }))
            ] } />
          </div>
        ) : null }
        <div className="Grid-cell u-sizeFill u-spaceTopSm u-md-size1of4">
        { customSearchFilter || includeBasicSearch ? (
            customSearchFilter ? (
              customSearchFilter
            ) : (
              <BasicSearch
                searchPlaceholder={ searchPlaceholder }
                searchFunction={ updateSearchFilter }
              />
            )
        ) : null }
        </div>
        { paginationPlacement != Placement.Bottom && paginationItems }
      </div>
      <div className="Grid-cell u-spaceTopSm">
        <Table
          columns={ cols }
          rows={ rows }
          externalSortingFunction={ (name, ascending) => {
            setSortName(name);
            setSortAscending(ascending);
          } }
          isLoading={ isLoading }
        />
      </div>
      { paginationPlacement == Placement.Bottom && paginationItems }
    </div>
  );
};

PaginatedTable.Filter = Filter;

export default PaginatedTable;
