import React from "react"
import { Link } from "react-router-dom"

import errorPic from "../../../images/not-found.png"

const OrganistItem = ({ val }) => {
	const imageError = (elm) => {
		elm.target.onError = null
		elm.target.src = errorPic
	}

	const imageSrc = `https://s3.amazonaws.com/pictures.organlive.com/organists/${val.picture ? val.picture : errorPic}`

	return (
		<Link to={`/library/organists/${val.id}`} className="list-link">
			<div className="list-container" key={val.id}>
				<img
					onError={imageError}
					className="pics"
					src={imageSrc}
					alt={val.artist}
				/>
				<p key={val.id} className="organistListText">
					{val.name}
				</p>
			</div>
		</Link>
	)
}

export default OrganistItem
