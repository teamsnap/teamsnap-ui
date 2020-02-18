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
  let maps = 3;
  if (buttonLength > 3 && currentPage + 3 > buttonLength) {
    maps = buttonLength + 1 - currentPage;
  }
  const buttonMapper = Array(buttonLength > 3 ? maps : buttonLength).fill(0);

  return (
    <ButtonGroup className="ButtonGroup" style={style}>
      <Button
        className="Button"
        isDisabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
        type="button"
      >
        Previous
      </Button>
      {buttonLength > 3 && currentPage + 3 > totalItems ? (
        <>
          <Button
            className="Button"
            isDisabled={1 === currentPage}
            onClick={() => setCurrentPage(1)}
            type="button"
          >
            1
          </Button>
          <Button className="Button" type="button">
            ...
          </Button>
        </>
      ) : null}
      {buttonMapper.map((_v, index) => {
        return (
          <Button
            key={index}
            className="Button"
            isDisabled={index + 1 === currentPage}
            onClick={() => setCurrentPage(index + 1)}
            type="button"
          >
            {index + currentPage}
          </Button>
        );
      })}
      {buttonLength > 3 && currentPage + 3 <= totalItems ? (
        <>
          <Button className="Button" type="button">
            ...
          </Button>
          <Button
            className="Button"
            isDisabled={buttonLength === currentPage}
            onClick={() => setCurrentPage(buttonLength)}
            type="button"
          >
            {buttonLength}
          </Button>
        </>
      ) : null}
      <Button
        className="Button"
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
