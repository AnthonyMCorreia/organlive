import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export default function Artist() {
	const artist = useSelector((state) => state.radio.song.artist)
	return (
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
	)
}
