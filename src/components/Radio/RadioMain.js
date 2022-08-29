import {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux"

// Components
import MusicInfo from "./MusicInfo"
import PlayProgress from "./PlayProgress"
import VolumeControls from "./VolumeControls"
import Listerners from "./Listeners"

// State
import {setDocumentTitle} from '../../state/ui'

import { isMobile } from "react-device-detect"

const RadioMain = () => {
	const dispatch = useDispatch()

	const radioInfo = useSelector((state) => state.radio.song.artist)
	const housekeeping = useSelector((state) => state.radio.song.housekeeping)

	useEffect(() => {
		dispatch(setDocumentTitle("Organlive | Radio"))
	}, [])

	return (
		<div id="radio">
			<div id="radioInner">
				{radioInfo ? <MusicInfo /> : null}
				<PlayProgress />
				{!isMobile && <VolumeControls />}
				{housekeeping && <Listerners />}
			</div>
		</div>
	)
}

export default RadioMain
