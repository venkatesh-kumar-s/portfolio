import React from "react";

const Search = ({ placeholder, search, setSearch }) => {
  return (
    <form onSubmit={(e) => (e.preventDefault(), setSearch(e.target[0].value))}>
      <input
        defaultValue={search}
        className="form-control shadow-sm"
        placeholder={placeholder}
      />
    </form>
  );
};

export default Search;
