import React from "react"
import { useDispatch, useSelector } from "react-redux"

// Components
import Progress from "./Progress"

// State
import { getSong, changePlaying } from "../../../state/radio"

const PlayProgress = () => {
	const dispatch = useDispatch()

	const song = useSelector((state) => state.radio.song)
	const isPlaying = useSelector(
		(state) => state.radio.currentPlayerInfo.time.isPlaying
	)

	const audio = document.getElementById("stream")

	const playPause = (e) => {
		e.preventDefault()

		if (audio) {
			if (audio.paused) {
				if (!song.housekeeping) {
					dispatch(getSong())
				}
				dispatch(changePlaying(true))
				audio.play()
			} else {
				dispatch(changePlaying(false))
				audio.pause()
			}
		}
	}
	return (
		<div id="play-progress-container">
			<button
				className="material-icons playButton"
				id="playback-button"
				onClick={playPause}>
				{isPlaying ? "pause" : "play_arrow"}
			</button>
			{song.housekeeping && <Progress />}
		</div>
	)
}

export default PlayProgress
