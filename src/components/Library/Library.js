import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Components
import Search from "./Search";
import LibraryItem from "./LibraryItem";

// State
import { getLibrary, setListLength, setList } from "../../state/library";

const Library = () => {
  const dispatch = useDispatch();
  const { selectedList, listLength } = useSelector((state) => state.library);

  const clickHandler = (val) => {
    console.log(val);
  };

  const loadMoreClick = () => {};

  return (
    <div id="library">
      <Search />
      <div id="library-list">
        {Array.isArray(selectedList)
          ? selectedList.map((val, index) => {
              return (
                <div className="list-container" key={index}>
                  <Link to="item" className="list-link">
                    <img
                      className="pics"
                      src={
                        val.picture !== ""
                          ? "http://pictures.organlive.com/" + val.picture
                          : "/not-found.png"
                      }
                      num={index}
                      onClick={() => clickHandler(val)}
                      alt={val.album}
                    />
                  </Link>
                  <p key={index} className="library-item">
                    {val.album}
                  </p>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Library;
