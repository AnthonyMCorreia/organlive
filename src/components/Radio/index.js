import React, { useState } from "react"

// Components
import MusicInfo from "./MusicInfo"
import PlayProgress from "./PlayProgress"
import VolumeControls from "./VolumeControls"

const Player = () => {
	const [radioBig, changeSize] = useState(true)

	const audio = document.getElementById("stream")

	return (
		<div id={radioBig ? "radio" : "radio-small"}>
			{radioBig ? (
				<>
					<audio id="stream" src="https://play.organlive.com:7010/320">
						Your browser does not support this player.
					</audio>
					<MusicInfo />
					<PlayProgress />
					<VolumeControls />
					<span
						id="radio-x"
						className="material-icons"
						onClick={() => changeSize(false)}>
						close
					</span>
				</>
			) : (
				<span
					id="radio-small-icon"
					className="material-icons"
					onClick={() => changeSize(true)}>
					radio
				</span>
			)}
		</div>
	)
}

export default Player
