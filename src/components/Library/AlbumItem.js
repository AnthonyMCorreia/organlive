import React from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"

//state
import { getItem } from "../../state/library"

// Images
import errorPic from "../../images/not-found.png"

const AlbumItem = ({ val, index }) => {
	const dispatch = useDispatch()

	const clickHandler = () => {
		dispatch(getItem(val.id))
	}

	const imageError = (elm) => {
		elm.target.onError = null
		elm.target.src = errorPic
	}

	return (
		<Link
			to={`library/${val.type}/${val.id}`}
			className="list-link"
			onClick={clickHandler}>
			<div className="list-container" key={index}>
				<img
					className="pics"
					src={
						val?.picture.trim()
							? `https://pictures.organlive.com/${val.picture}`
							: "/not-found"
					}
					onError={imageError}
					num={index}
					alt={val.album}
				/>
				<p key={index} className="library-item">
					{val.album}
				</p>
			</div>
		</Link>
	)
}

export default AlbumItem
