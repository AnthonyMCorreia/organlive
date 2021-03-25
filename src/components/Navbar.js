import React, { useState } from "react";
import { Link } from "react-router-dom";
import Search from "./SearchInput";
import MoreDropdown from "./MoreDropdown";

const Bar = () => {
  const [aboutMore, setAboutMore] = useState(0);
  const clickHandler = () => {
    setAboutMore(!aboutMore);
  };

  return (
    <header id="header">
      <h1 id="title">
        <Link className="link-animation" to="/">
          OrganLive
        </Link>
      </h1>
      <div id="header-content">
        <div id="links">
          <Link className="link link-animation" to="/Library">
            Library
          </Link>
          <Link className="link link-animation" to="/nowPlaying">
            Now Playing
          </Link>
          <Link className="link link-animation" to="/contact">
            Contact
          </Link>
          <Link className="link link-animation" to="/donate">
            Donate
          </Link>
          <Link
            onClick={clickHandler}
            className="link link-animation"
            id="about-us"
            to="/aboutUs">
            More
          </Link>
          {aboutMore ? <MoreDropdown /> : null}
        </div>
      </div>
    </header>
  );
};

export default Bar;
