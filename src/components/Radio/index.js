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
		<div id="radio">
			<audio id="stream" src={"https://play.organlive.com:7010/320"}>
				Your browser does not support this player.
			</audio>
			<div id="music-info">
				{song.album ? (
					<img
						src={"https://pictures.organlive.com/" + song.album.picture}
						className="player-pic"
						alt={song.album.title}></img>
				) : null}
			</div>
			<div id="play-progress-container">
				<button
					class="material-icons"
					id="playback-button"
					onClick={playHandler}>
					{isPlaying ? "pause" : "play_arrow"}
				</button>
				<div id="progress-container">
					{song.album ? (
						<small id="song-length">
							df
							{secondsToMinutesAndSeconds(song.housekeeping.timetotal)}
						</small>
					) : null}
					<progress id="progress" value></progress>
					{song.album ? (
						<small id="current-place">
							{secondsToMinutesAndSeconds(currentTime)}
						</small>
					) : null}
				</div>
			</div>
			<div id="volume-controls">
				<span class="material-icons">volume_up</span>
				<input type="range" min="0" max="100" onChange={volume} id="volume" />
			</div>
		</div>
	)
}

export default Player
