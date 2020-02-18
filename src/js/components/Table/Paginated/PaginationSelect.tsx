import { Select } from "../../Select";
import * as PropTypes from "prop-types";
import * as React from "react";

const propTypes = {
  options: PropTypes.arrayOf(PropTypes.number).isRequired,
  setItemsPerPage: PropTypes.func.isRequired
};

const PaginationButtons: React.FunctionComponent<PropTypes.InferProps<
  typeof propTypes
>> = ({ setItemsPerPage, options }) => {
  const selectOptions = options.map(num => ({
    label: `${num} Rows`,
    value: "" + num
  }));
  return (
    <Select
      name="standardSelect"
      style={{ width: "inherit" }} // override this style
      options={selectOptions}
      inputProps={{
        onChange: event => {
          setItemsPerPage(+event.target.value);
        }
      }}
    />
  );
};

PaginationButtons.propTypes = propTypes;

export default PaginationButtons;
