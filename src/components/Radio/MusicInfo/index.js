import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

const MusicInfo = () => {
	const artist = useSelector((state) => state.radio.song.artist)
	const song = useSelector((state) => state.radio.song.work)

	return (
		<div id="music-info">
			<div id="music-info-title">{song.title}</div>
			<div id="music-info-artist">
				<Link
					id="musicInfoArtistLink"
					to={`/organists/${artist.artist_id}`}>
					{artist.name}
				</Link>
			</div>
		</div>
	)
}

export default MusicInfo
