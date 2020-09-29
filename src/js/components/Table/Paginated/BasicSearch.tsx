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

  function updateSearchField(e) {
    const searchTerm = e.target.value;

    setSearchValue(searchTerm);
  }

  function handleSearch(searchValue) {
    searchFunction({ searchTerm: searchValue });
    setLastSearchValue(searchValue);
  }

  function handleSearchKeyPress(e) {
    if (e.key === "Enter") {
      searchAction();
    }
  }

  function searchAction() {
    handleSearch(searchValue);
  }

  function clearAction() {
    setSearchValue("");
    handleSearch("");
  }

  const showClear = lastSearchValue == searchValue && searchValue != "";

  return (
    <div className="InputGroup InputGroup--rightIcon InputGroup--iconButton">
      <input
        value={searchValue}
        name="searchField"
        className={`BasicSearch Input Grid-cell`}
        placeholder={searchPlaceholder}
        onChange={updateSearchField}
        onKeyPress={handleSearchKeyPress}
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
