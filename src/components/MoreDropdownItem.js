import React from "react";
import { Link } from "react-router-dom";

const SingleDropdownItem = (props) => {
  return (
    <li className="dropdown-item">
      <Link className="dropdown-links" to={props.link}>
        {props.text}
      </Link>
    </li>
  );
};

export default SingleDropdownItem;
