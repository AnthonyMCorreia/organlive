import React from "react"
import { useSelector } from "react-redux"

import Timer from "./Timer"

function songPercentage(current, total) {
	return (current / total) * 100
}

const millisecondsToMinutesAndSeconds = (milliseconds) => {
	milliseconds = +milliseconds
	const seconds = Math.floor(milliseconds / 1000)

	let minutes = Math.floor(seconds / 60)
	let remainingSeconds = seconds - minutes * 60

	if (`${remainingSeconds}`.length === 1) {
		remainingSeconds = `0${remainingSeconds}`
	}

	return `${minutes}:${remainingSeconds}`
}

const Progress = () => {
	const { currentTime, isPlaying } = useSelector(
		(state) => state.radio.currentPlayerInfo.time
	)
	const songTotal = useSelector(
		(state) => state.radio.song.housekeeping.timetotal
	)

	return (
		<div id="progress-container">
			{isPlaying ? <Timer /> : null}
			{currentTime ? (
				<small className="song-nums">
					{millisecondsToMinutesAndSeconds(currentTime)}
				</small>
			) : null}
			<div id="progress-background">
				{songTotal ? (
					<div
						id="progress"
						style={{
							color: "blue",
							width: `${songPercentage(currentTime, songTotal)}%`
						}}></div>
				) : null}
			</div>
			{songTotal ? (
				<small className="song-nums">
					{millisecondsToMinutesAndSeconds(songTotal)}
				</small>
			) : null}
		</div>
	)
}

export default Progress
