import React from "react"
import { Link } from "react-router-dom"

import errorPic from "../../../images/not-found.png"

const OrganistItem = ({ val }) => {
	const imageError = (elm) => {
		elm.target.onError = null
		elm.target.src = errorPic
	}

	const imageSrc = `https://s3.amazonaws.com/pictures.organlive.com/organists/${val.photo}`

	return (
		<Link to={`library/${val.type}/${val.id}`} className="list-link">
			<div className="list-container" key={val.id}>
				<img
					onError={imageError}
					className="pics"
					src={imageSrc}
					alt={val.artist}
				/>
				<p key={val.id} className="library-organist-text">
					{val.artist}
				</p>
			</div>
		</Link>
	)
}

export default OrganistItem
