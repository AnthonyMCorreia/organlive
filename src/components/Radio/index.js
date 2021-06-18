import React from "react"
import { useSelector, useDispatch } from "react-redux"
import {
	setPlayerState,
	getSong,
	updateCurrentTime,
	setTimer
} from "../../state/player"

// Styles
import "../../style/player.scss"

const secondsToMinutesAndSeconds = (seconds) => {
	const minutes = Math.floor(seconds / 60)
	const remainingSeconds = seconds - minutes * 60

	return `${minutes}:${remainingSeconds}`
}

const Player = () => {
	const dispatch = useDispatch()

	const { isPlaying, song, currentTime } = useSelector((state) => state.player)

	const audio = document.getElementById("stream")

	const volume = (e) => {
		e.preventDefault()

		audio.volume = e.target.value / 100
	}

	const playHandler = (e) => {
		e.preventDefault()

		if (audio) {
			if (audio.paused) {
				audio.play()
				dispatch(setPlayerState(!audio.paused))
				dispatch(getSong())
			} else {
				audio.pause()
				// e.target.id = "pause-button";
				console.log(audio.paused)
				dispatch(setPlayerState(audio.paused))
			}
		}
	}

	const muteHandler = (e) => {
		e.preventDefault()

		audio.volume = 0
	}

	return (
		<div className="player">
			<audio id="stream" src={"https://play.organlive.com:7010/320"}>
				Your browser does not support this player.
			</audio>
			{song.album ? (
				<img
					src={"https://pictures.organlive.com/" + song.album.picture}
					className="player-pic"
					alt={song.album.title}></img>
			) : null}
			<span>
				<div
					onClick={playHandler}
					className={
						isPlaying ? "pause-button-container" : "play-button-container"
					}>
					<button id={isPlaying ? "play-button" : "pause-button"} />
				</div>
			</span>
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
	)
}

export default Player
