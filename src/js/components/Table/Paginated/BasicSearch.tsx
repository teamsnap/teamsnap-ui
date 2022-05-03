import * as React from 'react';
import * as PropTypes from 'prop-types';

import { Icon } from '../../Icon';

const propTypes = {
  searchPlaceholder: PropTypes.string.isRequired,
  searchFunction: PropTypes.func.isRequired,
};

type Props = PropTypes.InferProps<typeof propTypes>;

const BasicSearchFilter = ({ searchPlaceholder, searchFunction }: Props) => {
  const [searchValue, setSearchValue] = React.useState('');
  const [lastSearchValue, setLastSearchValue] = React.useState('');

  const updateSearchField = React.useCallback((e) => setSearchValue(e.target.value), []);

  const handleSearch = React.useCallback((searchStr: string) => {
    searchFunction({ searchTerm: searchStr });
    setLastSearchValue(searchStr);
  }, []);

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
