import * as React from "react";
import { Table } from "../../Table";
import { usePagination } from "./helpers";
import PaginationButtons from "./PaginationButtons";
import PaginationCurrentSubsetDisplay from "./PaginationCurrentSubsetDisplay";
import PaginationSelect from "./PaginationSelect";

interface Props {
  loadData: (
    page: number,
    itemsPerPage: number,
    sortBy?: string,
    sortAsc?: boolean
  ) => Promise<any[]>;
  columns: {
    name: string;
    label: string;
    isSortable?: boolean;
    align?: string;
    mods?: string;
  }[];
  mapDataToRow: (item: any, index: number) => { id: any };
  defaultPage?: number;
  defaultItemsPerPage?: number;
  totalItems: number;
  hideRowsSelect?: boolean;
}

const PaginatedTable: React.FunctionComponent<Props> = ({
  loadData,
  columns,
  mapDataToRow,
  defaultPage,
  defaultItemsPerPage,
  totalItems,
  hideRowsSelect,
}) => {
  const [
    [itemsPerPage, setItemsPerPage],
    [currentPage, setCurrentPage],
  ] = usePagination(defaultItemsPerPage || 10, defaultPage || 1);
  const [dataSet, setDataSet] = React.useState([]);
  const [sortName, setSortName] = React.useState("");
  const [sortAscending, setSortAscending] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

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
        currentPage,
        itemsPerPage,
        sortName,
        sortAscending
      );
      setDataSet(data);
      setIsLoading(false);
    };

    setIsLoading(true);
    fetchData();
  }, [itemsPerPage, currentPage, sortName, sortAscending]);

  const rows = dataSet.map(mapDataToRow);
  console.log("render", isLoading);
  return (
    <div className="Grid">
      <div className="Grid Grid-cell Grid--fit Grid--withGutter">
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
                setItemsPerPage={setItemsPerPage}
                itemsPerPage={itemsPerPage}
              />
            </div>
          ) : null}
        </div>
      </div>
      <div className="Grid-cell u-spaceTopSm">
        <Table
          columns={columns}
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
