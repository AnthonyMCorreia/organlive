import { Link } from "react-router-dom"

export default function TrackItems({ val }) {
	const canRequest = val.requestavailable
	const songId = val.songid

	const clickFunc = () => {
		window.open(`https://api.organlive.com/request/${songId}`)
	}

	return (
		<div className="searchItem">
			<p className="searchItemTitle">{val.title}</p>
			<Link className="searchItemLink" to={`/library/albums/${val.albumid}`}>
				<p className="searchItemAlbumText">{val.album}</p>
			</Link>
			{canRequest === "true" && (
				<button
					onClick={clickFunc}
					className="searchItemRequestBttn pointer hoverOpacity">
					Request
				</button>
			)}
		</div>
	)
}
