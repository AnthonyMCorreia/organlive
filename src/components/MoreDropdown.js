import React from "react";
import { Link } from "react-router-dom";

const MoreDropdown = () => {
  return (
    <div className="dropdown">
      <ul id="dropdown-list">
        <li className="dropdown-item">
          <Link className="dropdown-links" to="/schedule">
            Schedule
          </Link>
        </li>
        <li className="dropdown-item">
          <Link className="dropdown-links" to="/submitRecording">
            Submit Recordings
          </Link>
        </li>
        <li className="dropdown-item">
          <Link className="dropdown-links" to="/otherStations">
            Other Stations
          </Link>
        </li>
        <li className="dropdown-item">
          <Link className="dropdown-links" to="/Donate">
            Donate
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MoreDropdown;
