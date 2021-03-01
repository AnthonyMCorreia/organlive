import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPlayerState } from "../state/player";

const Player = () => {
  const dispatch = useDispatch();
  const location = useSelector((state) => state.location);
  const audio = document.getElementById("stream");

  const volume = (event) => {
    event.preventDefault();

    audio.volume = event.target.value / 100;
  };

  const clickHandler = (event) => {
    event.preventDefault();

    if (audio.paused) {
      audio.play();
      dispatch(setPlayerState(audio.paused));
    } else {
      audio.pause();
      dispatch(setPlayerState(audio.paused));
    }
  };

  return (
    <div className="player">
      <audio id="stream" src={location}>
        Your browser does not support this player.
      </audio>
      <button onClick={clickHandler}>play</button>
      <input type="range" min="1" max="100" onChange={volume} id="volume" />
    </div>
  );
};

export default Player;
