import React from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"

import errorPic from "../../../images/not-found.png"

const ComposerItem = ({ val }) => {
	const imageError = (elm) => {
		elm.target.onError = null
		elm.target.src = errorPic
	}

	return (
		<Link
			to={`library/${val.type}/${val.id}`}
			className="list-link"
			key={val.id}>
			<div className="list-container">
				<p className="library-item no-pic-text">{val.composer}</p>
			</div>
		</Link>
	)
}

export default ComposerItem