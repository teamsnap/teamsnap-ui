import { Button } from "../Button";
import { ButtonGroup } from "../ButtonGroup";
import { getLastPageIndex } from "../Table/Paginated/helpers";
import * as PropTypes from "prop-types";
import * as React from "react";

const propTypes = {
  totalItems: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  style: PropTypes.object,
};

const PaginationButtons: React.FunctionComponent<PropTypes.InferProps<
  typeof propTypes
>> = ({ totalItems, itemsPerPage, currentPage, setCurrentPage, style }) => {
  const lastPageIndex = getLastPageIndex(totalItems, itemsPerPage);
  const buttonLength = totalItems >= 0 ? lastPageIndex : 0;
  const MAX_MIDDLE_BUTTONS = 5;
  const defaultStartOfMiddleButtons =
    currentPage - (Math.round(MAX_MIDDLE_BUTTONS / 2) - 1);
  const startOfMiddleButtons = Math.max(
    2,
    Math.min(defaultStartOfMiddleButtons, buttonLength - MAX_MIDDLE_BUTTONS)
  );
  const buttonMapper = Array(
    buttonLength > MAX_MIDDLE_BUTTONS ? MAX_MIDDLE_BUTTONS : buttonLength
  ).fill(startOfMiddleButtons);

  const renderPaginateButton = (
    key,
    text,
    isCurrentPage,
    isDisabled,
    pageForClick
  ) => {
    let linkClassName = "PaginateItem";
    let onclick = !isDisabled ? () => setCurrentPage(pageForClick) : null;

    if (isCurrentPage) {
      linkClassName = "PaginateItemIsActive";
    } else if (isDisabled) {
      linkClassName = "PaginateItemIsDisabled";
    }

    return (
      <Button
        key={key}
        className={`Button ${linkClassName}`}
        onClick={onclick}
        type="button"
      >
        {text}
      </Button>
    );
  };

  if (buttonLength < 2) return null;

  return (
    <ButtonGroup className="ButtonGroup" style={Object.assign({}, style, {overflow: "scroll"})}>
      {renderPaginateButton(
        "P",
        "Previous",
        false,
        currentPage === 1,
        currentPage - 1
      )}
      {renderPaginateButton(1, "1", currentPage === 1, currentPage === 1, 1)}
      {buttonMapper.map((page, index) => {
        if (page + index <= 1) return null;
        if (page + index >= buttonLength) return null;
        if (index === 0 && page + index > 2) {
          return renderPaginateButton("EF", "...", false, true, 0);
        }
        if (
          index === buttonMapper.length - 1 &&
          page + index < buttonLength - 1
        ) {
          return renderPaginateButton("EL", "...", false, true, 0);
        }

        return renderPaginateButton(
          index + page,
          index + page,
          index + page === currentPage,
          index + page === currentPage,
          page + index
        );
      })}
      {renderPaginateButton(
        buttonLength,
        buttonLength,
        currentPage === buttonLength,
        currentPage === buttonLength,
        buttonLength
      )}
      {renderPaginateButton(
        "N",
        "Next",
        false,
        currentPage === lastPageIndex || lastPageIndex === 0,
        currentPage + 1
      )}
    </ButtonGroup>
  );
};

PaginationButtons.propTypes = propTypes;

export default PaginationButtons;
