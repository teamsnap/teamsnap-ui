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
}

const PaginatedTable: React.FunctionComponent<Props> = ({
  loadData,
  columns,
  mapDataToRow,
  defaultPage,
  defaultItemsPerPage,
  totalItems
}) => {
  const [
    [itemsPerPage, setItemsPerPage],
    [currentPage, setCurrentPage]
  ] = usePagination(defaultItemsPerPage || 10, defaultPage || 1);
  const [dataSet, setDataSet] = React.useState([]);
  const [sortName, setSortName] = React.useState("");
  const [sortAscending, setSortAscending] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await loadData(
        currentPage,
        itemsPerPage,
        sortName,
        sortAscending
      );
      setDataSet(data);
    };

    fetchData();
  }, [itemsPerPage, currentPage, sortName, sortAscending]);

  const rows = dataSet.map(mapDataToRow);

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
          <div className="u-spaceLeftSm">
            <PaginationSelect
              options={[10, 25, 50]}
              setItemsPerPage={setItemsPerPage}
            />
          </div>
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
        />
      </div>
    </div>
  );
};

export default PaginatedTable;
