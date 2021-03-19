import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Search from "./SearchInput";

const Bar = () => {
  return (
    <header id="header">
      <h1 id="title">
        <Link className="link" to="/">
          OrganLive
        </Link>
      </h1>
      <div id="header-content">
        <Search />
        <div id="header-divider">|</div>
        <div id="links">
          <Link className="link" to="/otherStations">
            Other Stations
          </Link>
          <Link className="link" to="/aboutUs">
            About Us
          </Link>
          <Link className="link" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Bar;
