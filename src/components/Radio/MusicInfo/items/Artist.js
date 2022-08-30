import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export default function Artist() {
	const [intermission, setIntermission] = useState(false)

	let list = useSelector((state) => state.continuousTimer.songList)
	const artist = useSelector((state) => state.radio.song.artist)

	useEffect(() => {
		if (list[0]) {
			if (list[0].intermission) {
				setIntermission(true)
			} else if (!list[0].intermission) {
				setIntermission(false)
			}
		}
	}, [list])

	return (
		<>
			{intermission ? (
				<p className="radioInfoIntermission">Intermission</p>
			) : (
				<>
					{artist && (
						<div className="radioInfoArtist">
							{artist.photo && (
								<Link
									target="_blank"
									to={`/library/organists/${artist.artist_id}`}
									className="radioInfoArtistLink">
									<img
										className="radioInfoArtistPic hoverOpacity"
										src={`https://s3.amazonaws.com/pictures.organlive.com/organists/${artist.photo}`}
										alt={artist.artist}
									/>
								</Link>
							)}
							<div className="radioInfoArtistInfo">
								<Link
									target="_blank"
									to={`/library/organists/${artist.artist_id}`}
									className="radioInfoArtistLink">
									<h4 className="radioInfoArtistName">{artist.name}</h4>
								</Link>
								<div>
									<a
										href={artist.bio}
										target="_blank"
										className="radioInfoAritstBioBttn"
										rel="noreferrer">
										Bio
									</a>
								</div>
							</div>
						</div>
					)}
				</>
			)}
		</>
	)
}
