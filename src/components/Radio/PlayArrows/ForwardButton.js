import { useSelector, useDispatch } from "react-redux"

// State
import { jumpForward } from "../../../state/radio"

// Makes given number positive
function p(num) {
	return Math.abs(num)
}

export default function ForwardButton() {
	const dispatch = useDispatch()

	const audio = document.getElementById("stream")

	const { currentTime } = useSelector(
		(state) => state.radio.currentPlayerInfo.time
	)
	const song_duration = useSelector(
		(state) => state.radio.song.housekeeping.song_duration
	)
	const howLongBehind = useSelector(
		(state) => state.radio.currentPlayerInfo.time.pauseInfo.howLongBehind
	)

	const jumpForwardFunc = () => {
		if (audio) {
			const tenSecondsToMilliseconds = 10 * 1000

			const timeLeft = song_duration - currentTime

			const howLongBehindPositive = p(howLongBehind)
			const behindPositiveSeconds = howLongBehindPositive / 1000

			if (howLongBehind === 0) {
				return
			}

			if (
				timeLeft >= tenSecondsToMilliseconds &&
				howLongBehindPositive >= tenSecondsToMilliseconds
			) {
				dispatch(jumpForward(tenSecondsToMilliseconds))
				audio.currentTime = audio.currentTime + 10
			} else if (
				timeLeft < tenSecondsToMilliseconds &&
				howLongBehindPositive < tenSecondsToMilliseconds
			) {
				if (timeLeft <= howLongBehindPositive) {
					const timeLeftInSeconds = timeLeft / 1000

					dispatch(jumpForward(timeLeft))
					audio.currentTime = audio.currentTime + timeLeftInSeconds
				} else if (timeLeft > howLongBehindPositive) {
					dispatch(jumpForward(howLongBehindPositive))
					audio.currentTime = audio.currentTime + behindPositiveSeconds
				}
			} else if (
				timeLeft >= tenSecondsToMilliseconds &&
				howLongBehindPositive <= tenSecondsToMilliseconds
			) {
				dispatch(jumpForward(howLongBehindPositive))
				audio.currentTime = audio.currentTime + behindPositiveSeconds
			} else if (
				timeLeft <= tenSecondsToMilliseconds &&
				howLongBehindPositive >= tenSecondsToMilliseconds
			) {
				const timeLeftInSeconds = timeLeft / 1000

				dispatch(jumpForward(timeLeft))
				audio.currentTime = audio.currentTime + timeLeftInSeconds
			}

			/* 
			both are greater than or equal > plus 10
			both are less than
				timeLeft is greater than howLongBehind > plus howlongBehind
				timeLeft is less than howLongBehind > plus timeLeft
			timeLeft is greater than or equal and howLongBehind is less than > plus howLongBehind
			timeLeft is less than and howLongBehind is greater than or equal > plus timeLeft
			*/
		}
	}

	return (
		<div className="play-progress-arrow-cont">
			<span className="play-progress-arrow-text">10</span>
			<button
				className={
					howLongBehind === 0
						? "material-icons play-progress-arrows"
						: "material-icons play-progress-arrows hoverOpacity pointer"
				}
				onClick={jumpForwardFunc}>
				arrow_forward
			</button>
		</div>
	)
}
