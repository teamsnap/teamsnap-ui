import * as React from "react";
import { Table } from "../../Table";
import { usePagination } from "./helpers";
import PaginationButtons from "./PaginationButtons";
import PaginationCurrentSubsetDisplay from "./PaginationCurrentSubsetDisplay";
import PaginationSelect from "./PaginationSelect";
import { Checkbox } from "../../Checkbox";
import { Select } from "../../Select";

interface LoadDataObject {
  page: number,
  itemsPerPage: number,
  sortBy?: string,
  sortAsc?: boolean
}

interface BulkAction {
  label: string;
  onSelected: (selected: any) => void;
  disabled?: boolean;
}
interface Props {
  loadData: (
    requestedPayload: LoadDataObject
  ) => Promise<any[]>;
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
}

const PaginatedTable: React.FunctionComponent<Props> = ({
  loadData,
  columns,
  mapDataToRow,
  defaultPage,
  defaultItemsPerPage,
  totalItems,
  hideRowsSelect,
  rowsAreSelectable = false,
  bulkActions
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

  const setNewItemsPerPage = (newItemsPerPage) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  }

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
      const data = await loadData(
        {
          page: currentPage,
          itemsPerPage,
          sortBy: sortName,
          sortAsc: sortAscending
        }
      );
      setDataSet(data);
      setIsLoading(false);
    };

    setIsLoading(true);
    fetchData();
  }, [itemsPerPage, currentPage, sortName, sortAscending]);

  let rows = dataSet.map(mapDataToRow);

  let cols = columns;
  if (rowsAreSelectable) {
    cols = [{name: "selected", label: <div>
      <Checkbox name="select-all" inputProps={{checked: selected.length != 0 && selected.length == rows.length, onClick: () => {
        // if these aren't selected, we need to select them.
        if (selected.length < rows.length) {
          setSelected(rows);
        } else {
          // empty it out
          setSelected([]);
        }
      }}}/>
    </div>, mods: "u-size1of12"}, ...cols];

      // use IDs as keys to determine uniqueness
    const selectedids = selected.map(e => e.id);
    rows = rows.map((ele) => Object.assign({}, ele, {selected: <div>
      <Checkbox name={`select-${ele.id}`} inputProps={{checked: selectedids.includes(ele.id), onClick: () => {
        if (selectedids.includes(ele.id)) {
          setSelected(selected.filter(e => e.id != ele.id));
        } else {
          setSelected([...selected, ele]);
        }
      }}}/>
    </div>}));
  }

  // collisions overwrite
  const bulkActionFuncsByLabel = bulkActions?.reduce((acc, action: BulkAction) => {
    acc[action.label] = action.onSelected;
    return acc;
  }, {});

  return (
    <div className="Grid">
      <div className="Grid Grid-cell Grid--fit Grid--withGutter">
        {bulkActions?.length > 0 ?
          <div className="Grid-cell u-flex u-flexJustifyStart">
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
            options={[
              {label: selected.length > 0 ? `${selected.length} selected` : "Bulk actions", value: null},
              ...bulkActions.map((e) => ({
                label: e.label,
                value: e.label,
                disabled: e.disabled || false,
              }))
            ]} />
          </div> : null}
        <div className="Grid-cell u-sizeFit u-flex u-flexJustifyEnd">
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
      </div>
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
    </div>
  );
};

export default PaginatedTable;
