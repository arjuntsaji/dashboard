import React from "react";

function SearchBox() {
  return (
    <div className="search-container">
      <input type="text" id="searchInput" placeholder="Search transactions,invoices or help" />
      <div id="submitsearch"></div>
    </div>
  );
}

export default SearchBox;
