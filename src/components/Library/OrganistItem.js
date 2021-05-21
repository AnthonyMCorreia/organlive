import React from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"

//state
import { getItem } from "../../state/library"

const OrganistItem = ({ val, index }) => {
	console.log(val)
	const dispatch = useDispatch()

	const imageString = val.artist
		.toLowerCase()
		.split("")
		.filter((char) => {
			return char.match(/[a-zA-Z]/) || char === " "
		})
		.join("")
		.split(" ")
		.join("_")

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
					onError={imageError}
					className="pics"
					src={
						val.picture !== ""
							? "https://pictures.organlive.com/" + imageString + ".jpg"
							: "/not-found.png"
					}
					num={index}
					alt={val.artist}
				/>
				<p key={index} className="library-item">
					{val.artist}
				</p>
			</div>
		</Link>
	)
}

export default OrganistItem
