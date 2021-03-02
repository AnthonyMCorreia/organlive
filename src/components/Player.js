import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPlayerState, getSong } from "../state/player";

const secondsToMinutesAndSeconds = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds - minutes * 60;

  return `${minutes}:${remainingSeconds}`;
};

const Player = () => {
  const dispatch = useDispatch();

  const { isPlaying, song } = useSelector((state) => state.player);
  const location = useSelector((state) => state.location);

  const audio = document.getElementById("stream");

  console.dir(audio);

  const volume = (e) => {
    e.preventDefault();

    audio.volume = e.target.value / 100;
  };

  const playHandler = (e) => {
    e.preventDefault();

    if (audio.paused) {
      audio.play();
      dispatch(setPlayerState(!audio.paused));

      dispatch(getSong());
    } else {
      audio.pause();
      dispatch(setPlayerState(!audio.paused));
    }
  };

  const muteHandler = (e) => {
    e.preventDefault();

    audio.muted = !audio.muted;
  };

  return (
    <div className="player">
      <audio id="stream" src={location}>
        Your browser does not support this player.
      </audio>
      {song.album ? (
        <img
          src={"https://pictures.organlive.com/large/" + song.album.picture}
          alt={song.album.title}></img>
      ) : null}
      <button onClick={playHandler}>{isPlaying ? "pause" : "play"}</button>
      <button id="mute" onClick={muteHandler}>
        Mute
      </button>
      <input type="range" min="0" max="100" onChange={volume} id="volume" />
      <progress id="progress" value></progress>
    </div>
  );
};

export default Player;
