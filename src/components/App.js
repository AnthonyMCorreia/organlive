import { useEffect, useRef } from "react";
import logo from "../logo.svg";
import "../style/App.css";
import Navbar from "./Navbar";
import { useSelector, useDispatch } from "react-redux";
import { setLocation } from "../state/location";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log({ state });

  useEffect(() => {
    const timezone = new Date().getTimezoneOffset() / 60;

    const location = timezone >= 5 ? "USA" : "Europe";

    dispatch(setLocation(location));
  });

  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
