import React from "react"
import { useSelector } from "react-redux"

// Components
import MusicInfo from "./MusicInfo"
import PlayProgress from "./PlayProgress"
import VolumeControls from "./VolumeControls"

// Styles
import "../../style/player.scss"


const Player = () => {
	const { stream } = useSelector((state) => state.radio)

	return (
		<div id="radio">
			<audio id="stream" src={stream}>
				Your browser does not support this player.
			</audio>
			<MusicInfo />
			<PlayProgress />
			<VolumeControls />
		</div>
	)
}

export default Player
