import React from "react"
import { useDispatch, useSelector } from "react-redux"

// Components
import Progress from "./Progress"
import BackButton from "./BackButton"
import ForwardButton from "./ForwardButton"

// State
import { changePlaying, pause, unPause } from "../../../state/radio"
import { getSong } from "../../../state/radioContinuousTimer"

const PlayProgress = () => {
	const dispatch = useDispatch()

	const { song } = useSelector((state) => state.radio)
	const { isPlaying } = useSelector(
		(state) => state.radio.currentPlayerInfo.time
	)
	const playButtonPressed = useSelector(
		(state) => state.radio.currentPlayerInfo.time.playButtonPressed
	)

	const audio = document.getElementById("stream")

	const playPause = (e) => {
		e.preventDefault()

		if (audio) {
			if (audio.paused) {
				if (!song.housekeeping) {
					if (!playButtonPressed) {
						dispatch(getSong(true))
					}
				} else if (song.housekeeping) {
					dispatch(unPause(new Date().getTime()))
				}
				audio.play()
			} else {
				dispatch(pause(new Date().getTime()))
				audio.pause()
			}
			dispatch(changePlaying(!isPlaying))
		}
	}

	return (
		<>
			<div className="play-progress-buttons-cont">
				{song.housekeeping && <BackButton />}
				<button
					className="material-icons playButton"
					id="playback-button"
					onClick={playPause}>
					{isPlaying ? "pause" : "play_arrow"}
				</button>
				{song.housekeeping && <ForwardButton />}
			</div>
			{song.housekeeping && <Progress />}
		</>
	)
}

export default PlayProgress
