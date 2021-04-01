import React, { useState } from "react";
import { Link } from "react-router-dom";
import MoreDropdown from "./MoreDropdown";

const Bar = () => {
  const [aboutMore, setAboutMore] = useState(0);

  return (
    <header id="header">
      <h1 id="title">
        <Link className="link-animation" to="/">
          OrganLive
        </Link>
      </h1>
      <div id="header-content">
        <div id="links">
          <Link className="link link-animation" to="/library">
            Library
          </Link>
          <Link className="link link-animation" to="/nowPlaying">
            Now Playing
          </Link>
          <Link className="link link-animation" to="/contact">
            Contact
          </Link>
          <button
            onClick={() => setAboutMore(!aboutMore)}
            className="link link-animation"
            id="more-button"
            to="/">
            More
          </button>
          {aboutMore ? <MoreDropdown /> : null}
        </div>
      </div>
    </header>
  );
};

export default Bar;
