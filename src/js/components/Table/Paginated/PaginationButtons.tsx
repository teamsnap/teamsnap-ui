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
  const MAX_MIDDLE_BUTTONS = 3;
  const buttonMapper = Array(
    buttonLength > MAX_MIDDLE_BUTTONS ? MAX_MIDDLE_BUTTONS : buttonLength
  ).fill(currentPage - 1);

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
      <Button
        className="Button"
        isDisabled={1 === currentPage}
        onClick={() => setCurrentPage(1)}
        type="button"
      >
        1
      </Button>
      {buttonLength > MAX_MIDDLE_BUTTONS && currentPage > MAX_MIDDLE_BUTTONS ? (
        <Button className="Button" type="button" isDisabled={true}>
          ...
        </Button>
      ) : null}
      {buttonMapper.map((page, index) => {
        if (page + index <= 1) return null;
        if (page + index >= buttonLength) return null;
        return (
          <Button
            key={index}
            className="Button"
            isDisabled={index + page === currentPage}
            onClick={() => setCurrentPage(page + index)}
            type="button"
          >
            {index + page}
          </Button>
        );
      })}
      {buttonLength > MAX_MIDDLE_BUTTONS &&
      currentPage + MAX_MIDDLE_BUTTONS <= totalItems ? (
        <Button className="Button" type="button" isDisabled={true}>
          ...
        </Button>
      ) : null}
      <Button
        className="Button"
        isDisabled={buttonLength === currentPage}
        onClick={() => setCurrentPage(buttonLength)}
        type="button"
      >
        {buttonLength}
      </Button>
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
