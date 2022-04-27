import * as React from 'react';

// This context is used to provide the current state of filters to the paginated table
// and to allow the filters to individually update the context when changes are triggered.
const FilterContext = React.createContext<{
  activeFilters: any
  setActiveFilters: (filters: any) => void
  searchValue?: string
  setSearchValue?: (value: string) => void
}>({
  activeFilters: {},
  searchValue: '',
  setActiveFilters: () => {},
  setSearchValue: () => {}
});

export default FilterContext;
