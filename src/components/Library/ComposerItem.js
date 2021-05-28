import React from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"

//state
import { getItem } from "../../state/library"

const ComposerItem = ({ val, index }) => {
	const dispatch = useDispatch()

	const imageString =
		val.composer
			.toLowerCase()
			.split("")
			.filter((char) => {
				return char.match(/[a-zA-Z]/) || char === " "
			})
			.join("")
			.split(" ")
			.join("_") + ".jpg"

	console.log(imageString, val?.picture.trim())

	const clickHandler = () => {
		dispatch(getItem(val.id))
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
							? `https://pictures.organlive.com/${imageString}`
							: "/not-found"
					}
					num={index}
					alt={val.composer}
				/>
				<p key={index} className="library-item">
					{val.composer}
				</p>
			</div>
		</Link>
	)
}

export default ComposerItem
