import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setPlayerState,
  getSong,
  updateCurrentTime,
  setTimer
} from "../state/player";

const secondsToMinutesAndSeconds = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds - minutes * 60;

  return `${minutes}:${remainingSeconds}`;
};

const Player = () => {
  const dispatch = useDispatch();

  const { isPlaying, song, currentTime } = useSelector((state) => state.player);
  const location = useSelector((state) => state.location);

  const audio = document.getElementById("stream");

  const volume = (e) => {
    e.preventDefault();

    audio.volume = e.target.value / 100;
  };

  const tick = (seconds) => {
    dispatch(updateCurrentTime((seconds += 1)));
  };

  const playHandler = (e) => {
    e.preventDefault();

    if (audio.paused) {
      audio.play();
      dispatch(setPlayerState(!audio.paused));
      setInterval(() => {
        console.log(audio.currentTime);
      }, 100);
      dispatch(getSong());
    } else {
      audio.pause();
      dispatch(setPlayerState(!audio.paused));
    }
  };

  const muteHandler = (e) => {
    e.preventDefault();

    audio.volume = 0;
  };

  const playButton = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className="bi bi-play"
      viewBox="0 0 16 16">
      <path d="M10.804 8L5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
    </svg>
  );

  const pauseButton = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className="bi bi-pause"
      viewBox="0 0 16 16">
      <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z" />
    </svg>
  );

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
      <span onClick={playHandler}>{isPlaying ? pauseButton : playButton}</span>
      <button id="mute" onClick={muteHandler}>
        Mute
      </button>
      <input type="range" min="0" max="100" onChange={volume} id="volume" />
      <div id="progress-container">
        {song.album ? (
          <small id="current-place">
            {secondsToMinutesAndSeconds(currentTime)}
          </small>
        ) : null}
        <progress id="progress" value>
          50%
        </progress>
        {song.album ? (
          <small id="song-length">
            {secondsToMinutesAndSeconds(song.housekeeping.timetotal)}
          </small>
        ) : null}
      </div>
    </div>
  );
};

export default Player;
