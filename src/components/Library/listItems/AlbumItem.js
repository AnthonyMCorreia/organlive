import { Link } from "react-router-dom"

// Images
import errorPic from "../../../images/not-found.png"

const AlbumItem = ({ val }) => {
	const imageError = (elm) => {
		elm.target.onError = null
		elm.target.src = errorPic
	}

	const imageSrc = `https://s3.amazonaws.com/pictures.organlive.com/${val.picture}`

	return (
		<Link
			to={`library/${val.type}/${val.id}`}
			className="list-link"
			key={val.id}>
			<div className="list-container">
				<img
					className="pics"
					src={imageSrc}
					onError={imageError}
					alt={val.album}
				/>
				<p className="library-album-text">{val.album}</p>
			</div>
		</Link>
	)
}

export default AlbumItem
