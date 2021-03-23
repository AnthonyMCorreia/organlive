import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setOption } from "../state/search";

import { useSelect } from "@react-aria/select";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(0);
  const dispatch = useDispatch();
  const selectedOption = useSelector((state) => state.search.option);

  const clickHandler = (event) => {
    event.preventDefault();

    const optionValue = event.target.innerHTML;

    dispatch(setOption(optionValue));
    setIsOpen(false);
  };

  const toggleMenu = (event) => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="dropdown-menu">
      <div id="menu-toggle" onClick={toggleMenu}>
        {selectedOption === "" ? "options" : selectedOption}
      </div>
      {isOpen ? (
        <div id="dropdown-container" value="test">
          <div className="menu-option" onClick={clickHandler} name="name">
            name
          </div>
          <div className="menu-option" onClick={clickHandler} name="composer">
            composer
          </div>
          <div className="menu-option" onClick={clickHandler} name="organist">
            organist
          </div>
          <div className="menu-option" onClick={clickHandler} name="album">
            album
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default DropdownMenu;
