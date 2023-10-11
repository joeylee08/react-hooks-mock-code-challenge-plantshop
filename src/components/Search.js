import React from "react";

function Search({handleSetSearchValue}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleSetSearchValue}
      />
    </div>
  );
}

export default Search;
