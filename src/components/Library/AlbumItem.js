import React from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"

//state
import { getItem } from "../../state/library"

const AlbumItem = ({ val, index }) => {
	const dispatch = useDispatch()

	const clickHandler = () => {
		dispatch(getItem(val.id))
	}

	const imageError = (elm) => {
		elm.target.src = "/not-found.png"
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
						val.picture !== " "
							? "https://pictures.organlive.com/" + val.picture
							: "/not-found.png"
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
