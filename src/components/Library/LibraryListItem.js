import React from "react"
import { Link } from "react-router-dom"

const LibraryListItem = ({ val, index }) => {
	const clickHandler = (e) => {}

	return (
		<div className="list-container" key={index}>
			<Link to="item" className="list-link">
				<img
					className="pics"
					src={
						val?.picture.trim()
							? `https://pictures.organlive.com/${val.picture}`
							: "/not-found"
					}
					num={index}
					onClick={() => clickHandler(val)}
					alt={val.album}
				/>
			</Link>
			<p key={index} className="library-item">
				{val.album}
			</p>
		</div>
	)
}

export default LibraryListItem
