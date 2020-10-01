import * as React from "react";
import { Icon } from "../../Icon";

interface Props {
  searchPlaceholder: string;
  searchFunction: Function;
}

const BasicSearchFilter: React.FunctionComponent<Props> = ({
  searchPlaceholder,
  searchFunction,
}) => {
  const [searchValue, setSearchValue] = React.useState("");
  const [lastSearchValue, setLastSearchValue] = React.useState("");

  const updateSearchField = React.useCallback(
    (e) => setSearchValue(e.target.value),
    []
  );

  const handleSearch = React.useCallback((searchValue) => {
    searchFunction({ searchTerm: searchValue });
    setLastSearchValue(searchValue);
  }, []);

  const searchAction = React.useCallback(() => {
    handleSearch(searchValue);
  }, [searchValue]);

  const clearAction = React.useCallback(() => {
    setSearchValue("");
    handleSearch("");
  }, []);

  const handleSearchKeyPress = React.useCallback(
    (e) => {
      if (e.key === "Enter") {
        searchAction();
      }
    },
    [searchValue]
  );

  const showClear = lastSearchValue == searchValue && searchValue != "";

  return (
    <div className="InputGroup InputGroup--rightIcon InputGroup--iconButton" style={{width: "100%"}}>
      <input
        value={searchValue}
        name="searchField"
        className={`BasicSearch Input Grid-cell`}
        placeholder={searchPlaceholder}
        onChange={updateSearchField}
        onKeyPress={handleSearchKeyPress}
        style={{ minWidth: 250}}
      />
      <button
        className="InputGroup-icon"
        onClick={showClear ? clearAction : searchAction}
      >
        <Icon
          className="Icon"
          mods={null}
          name={showClear ? "dismiss" : "search"}
          otherProps={{}}
          style={{}}
        />
      </button>
    </div>
  );
};

export default BasicSearchFilter;
