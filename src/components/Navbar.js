import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

const Bar = () => {
  const dispatch = useDispatch();

  return <div id="navbar-container">'kjf</div>;
};

export default Bar;

const timeArr = new Date().getTimezoneOffset() / 60;

console.log(timeArr);
