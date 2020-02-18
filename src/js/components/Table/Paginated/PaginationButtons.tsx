import { Button } from "../../Button";
import { ButtonGroup } from "../../ButtonGroup";
import { getLastPageIndex } from "./helpers";
import * as PropTypes from "prop-types";
import * as React from "react";

const propTypes = {
  totalItems: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  style: PropTypes.object
};

const PaginationButtons: React.FunctionComponent<PropTypes.InferProps<
  typeof propTypes
>> = ({ totalItems, itemsPerPage, currentPage, setCurrentPage, style }) => {
  const lastPageIndex = getLastPageIndex(totalItems, itemsPerPage);
  const buttonLength = totalItems >= 0 ? lastPageIndex : 0;
  const buttonMapper = Array(buttonLength).fill(0);

  return (
    <ButtonGroup className="ButtonGroup" style={style}>
      <Button
        className="Button"
        isActive={false}
        isDisabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
        type="button"
      >
        Previous
      </Button>
      {buttonMapper.map((_v, index) => {
        return (
          <Button
            key={index}
            className="Button"
            isActive={false}
            isDisabled={index + 1 === currentPage}
            onClick={() => setCurrentPage(index + 1)}
            type="button"
          >
            {index + 1}
          </Button>
        );
      })}
      <Button
        className="Button"
        isActive={false}
        isDisabled={currentPage === lastPageIndex || lastPageIndex === 0}
        onClick={() => setCurrentPage(currentPage + 1)}
        type="button"
      >
        Next
      </Button>
    </ButtonGroup>
  );
};

PaginationButtons.propTypes = propTypes;

export default PaginationButtons;
