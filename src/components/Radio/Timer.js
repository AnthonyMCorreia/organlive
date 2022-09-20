import { useEffect, useRef, useCallback, useState } from "react"
import { useSelector, useDispatch } from "react-redux"

//State
import { changeCurrentTime, setDate } from "../../state/radio"

import { removeSongAndChangeSelected } from "../../state/radioContinuousTimer"

export default function Timer() {
	const dispatch = useDispatch()
	const interval = useRef(null)

	const [songDone, setSongDone] = useState(false)

	const { currentTime, currentDate } = useSelector(
		(state) => state.radio.currentPlayerInfo.time
	)

	const { song_duration } = useSelector(
		(state) => state.radio.song.housekeeping
	)

	const secondSong = useSelector((state) => state.continuousTimer.songList[1])

	const update = useCallback(() => {
		const newCurrentDate = new Date().getTime()
		const addedTime = newCurrentDate - currentDate
		const newCurrentTime = currentTime + addedTime

		setSongDone(newCurrentTime >= song_duration)

		if (typeof currentDate === "number") {
			if (newCurrentTime < song_duration) {
				dispatch(setDate(new Date().getTime()))
				dispatch(changeCurrentTime(currentTime + addedTime))
			}
		} else if (typeof currentDate !== "number") {
			const newTimePlus1000 = currentTime + 1000

			if (newTimePlus1000 < song_duration) {
				dispatch(setDate(new Date().getTime()))
				dispatch(changeCurrentTime(currentTime + 1000))
			}
		}
	}, [currentDate, currentTime, dispatch, song_duration])

	useEffect(() => {
		if (songDone && secondSong) {
			dispatch(removeSongAndChangeSelected(secondSong))
		}
	}, [songDone, secondSong, dispatch])

	const start = useCallback(() => {
		interval.current = setInterval(update, 1000)
	}, [update])

	const stop = useCallback(() => {
		clearInterval(interval.current)

		interval.current = null
	}, [])

	useEffect(() => {
		return () => {
			// Added time from last call of update(). If the user pauses halfway between intervals(10.5s for example), it will add the remainder of that last second.
			const addedTime = new Date().getTime() - currentDate

			if (typeof currentDate == "number") {
				dispatch(changeCurrentTime(addedTime + currentTime))
				dispatch(setDate("paused"))
			} else {
			}
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		start()
		return () => {
			stop()
		}
	}, [currentTime, start, stop])

	return null
}
