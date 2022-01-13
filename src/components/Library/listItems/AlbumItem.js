import { Link } from "react-router-dom"

// Images
import errorPic from "../../../images/not-found.png"

const AlbumItem = ({ val }) => {
	const imageError = (elm) => {
		elm.target.onError = null
		elm.target.src = errorPic
	}

	return (
		<Link to={`/albums/${val.id}`} className="list-link" key={val.id}>
			<div className="list-container">
				<img
					className="pics"
					src={`https://s3.amazonaws.com/pictures.organlive.com/${val.picture}`}
					onError={imageError}
					alt={val.album}
				/>
				<p className="library-album-text">{val.album}</p>
			</div>
		</Link>
	)
}

export default AlbumItem
