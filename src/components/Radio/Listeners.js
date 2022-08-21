import { useSelector } from "react-redux"

export default function Listerners() {
	const listeners = useSelector(
		(state) => state.radio.song.housekeeping.listeners
	)

	return (
		<>
			{!isNaN(+listeners) && (
				<p id="radioListeners">
					{listeners} {listeners === 1 ? "listener" : "listeners"}
				</p>
			)}
		</>
	)
}
