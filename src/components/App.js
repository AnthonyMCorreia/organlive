import { useEffect } from "react";
import Navbar from "./Navbar";
import { useSelector, useDispatch } from "react-redux";
import { setLocation } from "../state/location";
import Player from "./Player";
import Routes from "./Routes";

// State
import { getLibrary, setListLength, setList } from "./../state/library";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const timezone = new Date().getTimezoneOffset() / 60;

    const player =
      timezone >= 5
        ? "http://play.organlive.com:7000/320;.mp3"
        : "http://play2.organlive.com:7000/320;.mp3";

    dispatch(setLocation("https://stream.rcast.live/66783"));
    dispatch(getLibrary());
  });

  return (
    <div className="App">
      <Navbar />
      <Routes />
      <Player />
    </div>
  );
}

export default App;
