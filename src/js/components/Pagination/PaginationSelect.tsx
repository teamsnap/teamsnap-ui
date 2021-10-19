import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Select } from '../Select';

const propTypes = {
  options: PropTypes.arrayOf(PropTypes.number).isRequired,
  setItemsPerPage: PropTypes.func.isRequired,
  itemsPerPage: PropTypes.number,
  testId: PropTypes.string,
};

const PaginationSelect: React.FunctionComponent<PropTypes.InferProps<typeof propTypes>> = ({
  setItemsPerPage,
  options,
  itemsPerPage,
  testId,
}) => {
  const selectOptions = options.map((num) => ({
    label: `${num} Rows`,
    value: `${num}`,
  }));
  return (
    <Select
      name="standardSelect"
      style={{ width: 'inherit' }} // override this style
      options={selectOptions}
      inputProps={{
        onChange: (event) => {
          setItemsPerPage(+event.target.value);
        },
        value: itemsPerPage,
      }}
      data-testid={testId}
    />
  );
};

PaginationSelect.propTypes = propTypes;

export default PaginationSelect;
