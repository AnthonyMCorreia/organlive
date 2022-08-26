import { useRef, useCallback, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import { getSong } from "../../state/radioContinuousTimer"

// This timer runs continuously from the time the user presses the play button, and resumes if they pause. This will continue to get the song info regardless if the user is actively listening or not, it keeps track of what's being played
export default function ContinuousTimer() {
	const dispatch = useDispatch()
	const interval = useRef(null)

	const { currentTime, currentDate } = useSelector(
		(state) => state.radio.currentPlayerInfo.time
	)

	const { song_duration } = useSelector(
		(state) => state.radio.song.housekeeping
	)

	const update = useCallback(() => {
		const newCurrentDate = new Date().getTime()

		const addedTime = newCurrentDate - currentDate
		const newCurrentTime = currentTime + addedTime

		if (newCurrentTime < song_duration) {
			// dispatch(setDate(new Date().getTime()))
			// dispatch(changeCurrentTime(currentTime + addedTime))
		}

		if (currentTime >= song_duration) {
			stop()
			// dispatch(checkForRefresh(hid))
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentTime])

	const start = useCallback(() => {
		dispatch(getSong())
		interval.current = setInterval(update, 1000)
	}, [])

	const stop = useCallback(() => {
		clearInterval(interval.current)

		interval.current = null
	}, [])

	useEffect(() => {
		start()
		return () => {
			stop()
		}
	}, [start, stop])

	return null
}
