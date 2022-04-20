import { useDispatch, useSelector } from "react-redux"

// Components
import MusicInfo from "./MusicInfo"
import PlayProgress from "./PlayProgress"
import VolumeControls from "./VolumeControls"

// State
import { toggleRadio } from "../../state/ui"

const RadioMain = () => {
	const dispatch = useDispatch()

	const radioInfo = useSelector((state) => state.radio.song.artist)

	return (
		<div id="radio">
			{radioInfo ? <MusicInfo /> : null}
			{/* <div className="PlayVolume"> */}
			<PlayProgress />
			<VolumeControls />
			{/* </div> */}
			<span
				id="radio-x"
				className="material-icons"
				onClick={() => dispatch(toggleRadio(false))}>
				close
			</span>
		</div>
	)
}

export default RadioMain
