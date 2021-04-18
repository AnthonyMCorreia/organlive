import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import autoComplete from "autocompleter";
import { getLibrary } from "../../state/library";

const Search = () => {
  const dispatch = useDispatch();

  const library = useSelector((state) => state.library);
  const input = document.getElementById("search-input");

  if (input) {
    autoComplete({
      input,
      fetch: function (text, update) {
        text = text.toLowerCase();

        const albumsArray = Object.keys(library.albums);
        const composersArray = Object.value(library.composers)
          .map((person) => {
            return person
              .split(" ")
              .map((word, index) =>
                index === 0 ? word.substring(0, -1) : word
              );
          })
          .reverse()
          .join(" ");
        const artistsArray = Object.keys(library.artists);

        // const suggestions = Object.keys(library).
      }
    });
  }

  return (
    <div id="search">
      test
      <input id="search-input" placeholder="Search our Library" />
    </div>
  );
};

export default Search;
