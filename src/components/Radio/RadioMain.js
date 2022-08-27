import { useDispatch, useSelector } from "react-redux"

// Components
import MusicInfo from "./MusicInfo"
import PlayProgress from "./PlayProgress"
import VolumeControls from "./VolumeControls"
import Listerners from "./Listeners"

// State
import { toggleRadio } from "../../state/ui"

const RadioMain = () => {
	const dispatch = useDispatch()

	const radioInfo = useSelector((state) => state.radio.song.artist)
	const housekeeping = useSelector((state) => state.radio.song.housekeeping)
	const isMobile = useSelector((state) => state.ui.isMobile)

	return (
		<div id="radio">
			<div id="radioInner">
				{radioInfo ? <MusicInfo /> : null}
				<PlayProgress />
				<VolumeControls />
				{housekeeping && <Listerners />}
				<span
					id="radio-x"
					className="material-icons"
					onClick={() => dispatch(toggleRadio(false))}>
					close
				</span>
			</div>
		</div>
	)
}

export default RadioMain
