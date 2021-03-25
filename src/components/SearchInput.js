import React from "react";
import DropdownMenu from "./DropdownMenu";
import { setSearchText } from "../state/search";
import { useDispatch, useSelector } from "react-redux";
import history from "../history";

const Search = () => {
  const dispatch = useDispatch();
  const option = useSelector((state) => state.search.option);

  const submitHandler = (event) => {
    event.preventDefault();
  };

  const clickHandler = () => {
    history.push("/search");
  };

  return (
    <form id="search-form" onSubmit={submitHandler}>
      <input id="text-input" name="text" placeholder="search library" />
      <select name="options" id="menu-toggle">
        <option hidden>Options</option>
        <option value="name">Name</option>
        <option value="composer">Composer</option>
        <option value="organist">Organist</option>
        <option value="album">Album</option>
      </select>
      <button
        type="submit"
        onClick={clickHandler}
        className="button link-animation link"
        id="form-button">
        Search
      </button>
    </form>
  );
};

export default Search;
