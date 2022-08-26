import { useDispatch, useSelector } from "react-redux"

// State
import { toggleMute, setVolume, setPreviousVolume } from "../../state/radio"

const VolumeControls = () => {
	const dispatch = useDispatch()

	const { isMuted, currentVolume } = useSelector(
		(state) => state.radio.currentPlayerInfo.volume
	)

	const audio = document.getElementById("stream")

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

		if (audio) {
			if (isMuted && audio.muted) {
				dispatch(toggleMute(false))
			} else if (!audio.muted && !isMuted) {
				dispatch(toggleMute(true))
				dispatch(setPreviousVolume(currentVolume))
			}
			audio.muted = !audio.muted
		}
	}

	return (
		<div id="volume-controls">
			{isMuted || currentVolume === 0 ? (
				<span className="material-icons pointer" onClick={muteFunc}>
					volume_off
				</span>
			) : (
				<span className="material-icons pointer" onClick={muteFunc}>
					volume_up
				</span>
			)}
			<input
				type="range"
				min="0"
				max="100"
				onChange={volumeHandler}
				id="volumeBar"
				value={isMuted ? "0" : `${currentVolume * 100}`}
			/>
		</div>
	)
}

export default VolumeControls
