import * as React from "react";
import { Table } from "../../Table";
import { usePagination } from "./helpers";
import PaginationButtons from "./PaginationButtons";

interface Props {
  loadData: (
    page: number,
    itemsPerPage: number,
    sortBy?: string
  ) => Promise<any[]>;
  columns: {
    name: string;
    label: string;
    isSortable?: boolean;
    align?: string;
    mods?: string;
  }[];
  mapDataToRow: (item: any) => { id: any };
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

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await loadData(currentPage, itemsPerPage);
      setDataSet(data);
    };

    fetchData();
  }, [itemsPerPage, currentPage]);

  const rows = dataSet.map(mapDataToRow);

  return (
    <div className="Grid">
      <div className="Grid Grid-cell Grid--fit Grid--withGutter">
        <div
          className="Grid-cell"
          style={{ display: "flex", justifyContent: "end" }}
        >
          <p className="u-pad">
            <PaginationButtons
              totalItems={totalItems}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </p>
        </div>
      </div>
      <div className="Grid-cell u-spaceTopSm">
        <Table columns={columns} rows={rows} />
      </div>
    </div>
  );
};

export default PaginatedTable;
