import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Search from "./Search";
import { getLibrary, setListLength, setList } from "../../state/library";

const Library = () => {
  const dispatch = useDispatch();
  const {
    lists: { albums, composers, artists },
    selectedList,
    listLength
  } = useSelector((state) => state.library);

  useEffect(() => {
    dispatch(getLibrary());
    dispatch(setList(albums));
  }, []);

  return (
    <div id="library">
      {/* <Search /> */}
      {selectedList
        ? selectedList.map(([key, val], index) => {
            if (index <= 100) {
              return (
                <div className="album" key={index}>
                  <p key={index} className="library-item">
                    {val.id}
                  </p>
                  <img
                    className="pics"
                    src={
                      val.picture !== ""
                        ? "http://pictures.organlive.com/" + val.picture
                        : "/not-found.png"
                    }
                    alt={val.album}
                  />
                </div>
              );
            }
          })
        : null}
    </div>
  );
};

export default Library;
