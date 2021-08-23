import React from "react"
import { useSelector } from "react-redux"
import Image from "./Image"

const MusicInfo = () => {
	const first = useSelector((state) => state.radio.initialRequest)

	return <div id="music-info"> 
	{first ? <Image /> : null}
	</div>
}

export default MusicInfo
