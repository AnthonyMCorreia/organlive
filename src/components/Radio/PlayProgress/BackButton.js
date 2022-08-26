import { useSelector, useDispatch } from "react-redux"

// State
import { jumpBack } from "../../../state/radio"

export default function BackButton() {
	const dispatch = useDispatch()

	const audio = document.getElementById("stream")

	const { currentTime } = useSelector(
		(state) => state.radio.currentPlayerInfo.time
	)

	const jumpBackFunc = () => {
		if (audio) {
			const audioTagCurrentTime = audio.currentTime
			const stateCurrentTimeInSeconds = currentTime / 1000
			const tenSecondsToMilliseconds = 10 * 1000

			if (audioTagCurrentTime >= 10 && stateCurrentTimeInSeconds >= 10) {
				dispatch(jumpBack(tenSecondsToMilliseconds))
				audio.currentTime = audio.currentTime - 10
			} else if (audioTagCurrentTime < 10 && stateCurrentTimeInSeconds < 10) {
				if (audioTagCurrentTime >= stateCurrentTimeInSeconds) {
					dispatch(jumpBack(currentTime))
					audio.currentTime = audio.currentTime - stateCurrentTimeInSeconds
				} else if (audioTagCurrentTime < stateCurrentTimeInSeconds) {
					const audioTagTimeToMilliseconds = audioTagCurrentTime * 1000
					dispatch(jumpBack(audioTagTimeToMilliseconds))
					audio.currentTime = 0
				}
			} else if (audioTagCurrentTime < 10 && stateCurrentTimeInSeconds >= 10) {
				dispatch(jumpBack(audioTagCurrentTime * 1000))
				audio.currentTime = 0
			} else if (audioTagCurrentTime >= 10 && stateCurrentTimeInSeconds < 10) {
				dispatch(jumpBack(currentTime))
				audio.currentTime = audio.currentTime - stateCurrentTimeInSeconds
			}
		}
	}

	return (
		<div className="play-progress-arrow-cont">
			<button
				onClick={jumpBackFunc}
				className="material-icons play-progress-arrows hoverOpacity pointer">
				arrow_back
			</button>
			<span className="play-progress-arrow-text">10</span>
		</div>
	)
}
