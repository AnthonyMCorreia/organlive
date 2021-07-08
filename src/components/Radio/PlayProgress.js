import React from 'react';
import { useDispatch, useSelector } from 'react-redux'

// State 
import {
	setPlayerState,
	getSong,
	updateCurrentTime,
	setTimer,
} from "../../state/radio"

const secondsToMinutesAndSeconds = (seconds) => {
	seconds = +seconds

	const minutes = Math.floor(seconds / 60)
	const remainingSeconds = (seconds - minutes * 60)

	return `${minutes}:${remainingSeconds}`
}

const PlayProgress = () => {
    const audio = document.getElementById('audio')
	const {
		stream,
		currentPlayerInfo: { isPlaying },
		song,
		currentTime,
	} = useSelector((state) => state.radio)

    const dispatch = useDispatch()

    const playHandler = (e) => {
		e.preventDefault()

		if (audio) {
			if (audio.paused) {
				audio.play()
				dispatch(setPlayerState(true))
				dispatch(getSong())
			} else {
				audio.pause()
				dispatch(setPlayerState())
			}
		}
	}
    return (
        <div id="play-progress-container">
        <button
            className="material-icons"
            id="playback-button"
            onClick={playHandler}>
            {isPlaying ? "pause" : "play_arrow"}
        </button>
        <div id="progress-container">
            {song.album ? (
                <small className="song-nums">
                    {secondsToMinutesAndSeconds(song.housekeeping.timetotal)}
                </small>
            ) : null}
            <progress id="progress" min="0" max="100" value={currentTime ? currentTime : 0}></progress>
            {song.album ? (
                <small className="song-nums">
                    {secondsToMinutesAndSeconds(currentTime)}
                </small>
            ) : null}
        </div>
    </div>
    )
}

export default PlayProgress