import React from "react"

import { useDispatch, useSelector } from "react-redux"

// State
import { toggleMute, setVolume, setPreviousVolume } from "../../state/radio"

const VolumeControls = () => {
	const audio = document.getElementById("stream")
	const volumeBar = document.getElementById("volumeBar")
	const dispatch = useDispatch()

	const { isMuted, currentVolume, previousVolume } = useSelector(
		(state) => state.radio.currentPlayerInfo.volume
	)

	const volumeHandler = (e) => {
		e.preventDefault()

		if (audio) {
			const updatedVolume = e.target.value / 100
			audio.volume = updatedVolume
			audio.muted = false
			dispatch(toggleMute(false))

			dispatch(setVolume(updatedVolume))
		}
	}

	const muteFunc = (e) => {
		e.preventDefault()

		if (isMuted && audio.muted) {
			dispatch(toggleMute(false))

			volumeBar.value = previousVolume * 100
		} else if (!audio.muted && !isMuted) {
			dispatch(toggleMute(true))
			dispatch(setPreviousVolume(currentVolume))

			volumeBar.value = 0
		}
		audio.muted = !audio.muted
	}

	return (
		<div id="volume-controls">
			{isMuted === true || currentVolume === 0 ? (
				<span className="material-icons" onClick={muteFunc}>
					volume_off
				</span>
			) : (
				<span className="material-icons" onClick={muteFunc}>
					volume_up
				</span>
			)}
			<input
				type="range"
				min="0"
				max="100"
				onChange={volumeHandler}
				id="volumeBar"
			/>
		</div>
	)
}

export default VolumeControls
