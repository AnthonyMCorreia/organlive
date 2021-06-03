import React, { useState } from "react"
import { Link } from "react-router-dom"

// Components
import MoreDropdown from "./MoreDropdown"

const MainMenu = ({ aboutMore, setAboutMore }) => {
	// const [aboutMore, setAboutMore] = useState(0)

	document.addEventListener("click", (evt) => {
		const id = evt.target.id

		if (id !== "more-button" && aboutMore) {
			setAboutMore(false)
		}
	})

	return (
		<div id="links">
			<Link className="link link-animation" to="/library">
				Library
			</Link>
			<Link className="link link-animation" to="/nowplaying">
				Now Playing
			</Link>
			<Link className="link link-animation" to="/contact">
				Contact
			</Link>
			<button
				onClick={() => setAboutMore(!aboutMore)}
				className="link link-animation"
				id="more-button">
				More
			</button>
			{aboutMore ? <MoreDropdown /> : null}
		</div>
	)
}

export default MainMenu
