import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

//state
import { getItem } from "../../state/library";

const LibraryItem = (item, index) => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(getItem(item.id));
  };

  return (
    <Link
      to={`library/${item.type}/${item.id}`}
      className="list-link"
      onClick={clickHandler}>
      <div className="list-container" key={index}>
        <img
          className="pics"
          src={
            item.picture !== ""
              ? "http://pictures.organlive.com/" + item.picture
              : "/not-found.png"
          }
          num={index}
          alt={item.album}
        />
        <p key={index} className="library-item">
          {item.album}
        </p>
      </div>
    </Link>
  );
};

export default LibraryItem;
