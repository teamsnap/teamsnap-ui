import * as React from 'react';
import * as PropTypes from 'prop-types';

import { Icon } from '../../Icon';
import FilterContext from '../../../context/filterContext';

const propTypes = {
  searchPlaceholder: PropTypes.string.isRequired,
  searchFunction: PropTypes.func.isRequired,
  useExternalFilterProvider: PropTypes.bool.isRequired
};

type Props = PropTypes.InferProps<typeof propTypes>;

const BasicSearchFilter = ({ useExternalFilterProvider, searchPlaceholder, searchFunction }: Props) => {
  const [lastSearchValue, setLastSearchValue] = React.useState('');
  const localSearchValue = React.useState('');

  const filterContext = React.useContext(FilterContext);
  const { searchValue, setSearchValue } = useExternalFilterProvider
    ? filterContext
    : {
      searchValue: localSearchValue[0],
      setSearchValue: localSearchValue[1]
    }

  const updateSearchField = React.useCallback((e) => setSearchValue(e.target.value), []);

  const handleSearch = React.useCallback((searchStr: string) => {
    searchFunction({ searchTerm: searchStr });
    setLastSearchValue(searchStr);
  }, []);

  React.useEffect(() => {
    searchFunction({ searchTerm: filterContext.searchValue });
    setLastSearchValue(filterContext.searchValue);
  }, [filterContext.searchValue]);

  const searchAction = React.useCallback(() => {
    handleSearch(searchValue);
  }, [searchValue]);

  const clearAction = React.useCallback(() => {
    setSearchValue('');
    handleSearch('');
  }, []);

  const handleSearchKeyPress = React.useCallback(
    (e) => {
      if (e.key === 'Enter') {
        searchAction();
      }
    },
    [searchValue]
  );

  const showClear = lastSearchValue === searchValue && searchValue !== '';

  return (
    <div
      className="InputGroup InputGroup--leftIcon InputGroup--iconButton"
      style={{ width: '100%' }}
    >
      <input
        value={searchValue}
        name="searchField"
        className="BasicSearch Input Grid-cell"
        placeholder={searchPlaceholder}
        onChange={updateSearchField}
        onKeyPress={handleSearchKeyPress}
        style={{ minWidth: 250 }}
      />
      <button
        type="submit"
        className="InputGroup-icon"
        onClick={showClear ? clearAction : searchAction}
      >
        <Icon
          className="Icon"
          mods={null}
          name={showClear ? 'dismiss' : 'search'}
          otherProps={{}}
          style={{}}
        />
      </button>
    </div>
  );
};

export default BasicSearchFilter;
