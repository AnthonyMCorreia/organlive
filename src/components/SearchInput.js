import React from "react";
import Select from "react-select";

const options = [
  { value: "name", label: "Name" },
  { value: "composer", label: "Composer" },
  { value: "organist", label: "Organist" },
  { value: "album", label: "Album" }
];

const optionsStyles = {};

const Search = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form id="search-form" onSubmit={submitHandler}>
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
      <button type="submit" className="button link" id="form-button">
        Search
      </button>
    </form>
  );
};

export default Search;
