import { Link } from "react-router-dom"

export default function TrackItems({ val }) {
	return (
		<div className="searchItem">
			<p className="searchItemTitle">{val.title}</p>
			<Link className="searchItemLink" to={`/library/albums/${val.albumid}`}>
				<p className="searchItemAlbumText">{val.album}</p>
			</Link>
			<button className="searchItemRequestBttn">Request Song</button>
		</div>
	)
}
