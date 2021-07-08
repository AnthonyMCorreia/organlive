import React from 'react';

import { useDispatch, useSelector } from 'react-redux'

// State 
import {
	setPlayerState,
	getSong,
	updateCurrentTime,
	setTimer,
	toggleMute,
	setVolume
} from "../../state/radio"

const VolumeControls = () => {
    const audio = document.getElementById("audio")
	const volumeBar = document.getElementById("volumeBar")

    const dispatch = useDispatch()

    const volumeHandler = (e) => {
		e.preventDefault()

		if (audio) {
			const updatedVolume = e.target.value / 100
			audio.volume = updatedVolume
			audio.muted = false
		}
	}


	const muteFunc = (e) => {
		e.preventDefault()


		if (audio.muted) {
			volumeBar.value = 0

		} else if (!audio.muted) {

		}
		audio.muted = !audio.muted
		volumeBar.value = 0

		dispatch(toggleMute(!audio.muted))

	}

    return (
        <div id="volume-controls">
        <span className="material-icons" onClick={muteFunc}>
            volume_up
        </span>
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