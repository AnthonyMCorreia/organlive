import { useEffect, useRef, useCallback } from "react"
import { useSelector, useDispatch } from "react-redux"

//State
import {
	changeCurrentTime,
	setDate,
	checkForRefresh
} from "../../../state/radio"

const Timer = () => {
	const dispatch = useDispatch()
	const interval = useRef(null)

	const { currentTime, currentDate } = useSelector(
		(state) => state.radio.currentPlayerInfo.time
	)

	const { song_duration, hid } = useSelector(
		(state) => state.radio.song.housekeeping
	)

	const update = useCallback(() => {
		const newCurrentDate = new Date().getTime()

		const addedTime = newCurrentDate - currentDate
		const newCurrentTime = currentTime + addedTime

		if (newCurrentTime < song_duration) {
			dispatch(setDate(new Date().getTime()))
			dispatch(changeCurrentTime(currentTime + addedTime))
		} 
		
		if (currentTime >= song_duration) {
			console.log("update() calling stop()")
			stop()
			// dispatch(checkForRefresh(hid))
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentTime])

	const start = useCallback(() => {
		interval.current = setInterval(update, 1000)
	}, [update])

	const stop = useCallback(() => {
		clearInterval(interval.current)

		interval.current = null
	}, [])

	useEffect(() => {
		start()
		return () => {
			stop()
		}
	}, [currentTime, start, stop])

	return null
}

export default Timer

// const Timer = () => {
// 	const dispatch = useDispatch()
// 	const interval = useRef(null)

// 	const { timeleft, hid } = useSelector(
// 		(state) => state.radio.currentPlayerInfo.time
// 	)

// 	const { timetotal, workid } = useSelector(
// 		(state) => state.radio.song.housekeeping
// 	)

// 	const update = useCallback(() => {
// 		const newCurrentDate = new Date().getTime()

// 		const addedTime = newCurrentDate - currentDate

// 		if (currentTime < timetotal) {
// 			dispatch(setDate(new Date().getTime()))
// 			dispatch(changeCurrentTime(currentTime + addedTime))
// 		} else if (currentTime >= timetotal) {
// 			stop()
// 			dispatch(checkForRefresh(workid))
// 		}
// 		// eslint-disable-next-line react-hooks/exhaustive-deps
// 	}, [currentTime])

// 	const start = useCallback(() => {
// 		interval.current = setInterval(update, 20)
// 	}, [update])

// 	const stop = useCallback(() => {
// 		clearInterval(interval.current)

// 		interval.current = null
// 	}, [])

// 	useEffect(() => {
// 		start()
// 		return () => {
// 			stop()
// 		}
// 	}, [currentTime, start, stop])

// 	return null
// }

// export default Timer
