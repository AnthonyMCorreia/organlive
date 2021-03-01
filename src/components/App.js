import { useEffect, useRef } from "react";
import logo from "../logo.svg";
import "../style/App.css";
import Navbar from "./Navbar";
import { useSelector, useDispatch } from "react-redux";
import { setLocation } from "../state/location";
import Player from "./Player";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const timezone = new Date().getTimezoneOffset() / 60;

    const player =
      timezone >= 5
        ? "http://play.organlive.com:7000/320;.mp3"
        : "http://play2.organlive.com:7000/320;.mp3";

    dispatch(setLocation(player));
  });

  return (
    <div className="App">
      <Navbar />
      <Player />
    </div>
  );
}

export default App;
