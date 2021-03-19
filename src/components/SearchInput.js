import React from "react";

const Search = () => {
  return (
    <form id="search-form">
      <input id="text-input" name="text" placeholder="search library" />
      <select
        placeholder="options"
        name="option"
        alt="options"
        id="option-dropdown">
        <option id="placeholder-option">Options</option>
        <option className="spec-option" value="name">
          Name
        </option>
        <option className="spec-option" alt="Composer" value="composer">
          Composer
        </option>
        <option className="spec-option" alt="Organist" value="organist">
          Organist
        </option>
        <option className="spec-option" alt="Album" value="album">
          Album
        </option>
      </select>
    </form>
  );
};

export default Search;
