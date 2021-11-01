import { useDispatch } from "react-redux"

// Components
import MusicInfo from "./MusicInfo"
import PlayProgress from "./PlayProgress"
import VolumeControls from "./VolumeControls"

// State
import { toggleRadio } from "../../state/ui"

const RadioMain = () => {
	const dispatch = useDispatch()


	return (
		<div id="radio">
			<MusicInfo />
			<PlayProgress />
			<VolumeControls />
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
