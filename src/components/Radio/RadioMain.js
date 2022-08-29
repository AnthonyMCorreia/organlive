import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

// Components
import MusicInfo from "./MusicInfo"
import PlayProgress from "./PlayArrows"
import VolumeControls from "./VolumeControls"
import Listerners from "./Listeners"
import Progress from "./Progress"
import Menu from "./MusicInfo/Menu"

// State
import { setDocumentTitle } from "../../state/ui"

import { isMobile } from "react-device-detect"

const RadioMain = () => {
	const dispatch = useDispatch()
	const [menuOpen, setMenuOpen] = useState(false)

	const radioInfo = useSelector((state) => state.radio.song.artist)
	const housekeeping = useSelector((state) => state.radio.song.housekeeping)
	const song = useSelector((state) => state.radio.song)

	useEffect(() => {
		dispatch(setDocumentTitle("Organlive | Radio"))

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div id="radio">
			<div id="radioInner">
				{radioInfo && (
					<span
						className="material-icons expandMore"
						onClick={() => setMenuOpen(!menuOpen)}>
						{menuOpen ? "expand_less" : "expand_more"}
					</span>
				)}
				{menuOpen && <Menu setMenuOpen={setMenuOpen} />}
				{radioInfo ? <MusicInfo /> : null}
				<div className="radioPlayVolumeCont">
					<PlayProgress />
					{!isMobile && <VolumeControls />}
				</div>
				{song.housekeeping && <Progress />}
				{housekeeping && <Listerners />}
			</div>
		</div>
	)
}

export default RadioMain
