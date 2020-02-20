import * as PropTypes from "prop-types";
import * as React from "react";

const propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired
};

const PaginationCurrentSubsetDisplay: React.FunctionComponent<PropTypes.InferProps<
  typeof propTypes
>> = ({ totalItems, itemsPerPage, currentPage }) => {
  return (
    <>
      {(currentPage - 1) * itemsPerPage + 1} -{" "}
      {currentPage * itemsPerPage < totalItems
        ? currentPage * itemsPerPage
        : totalItems}{" "}
      of {totalItems}
    </>
  );
};

PaginationCurrentSubsetDisplay.propTypes = propTypes;

export default PaginationCurrentSubsetDisplay;
