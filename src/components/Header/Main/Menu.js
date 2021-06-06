import React from "react"
import { Link } from "react-router-dom"

// Components
import MoreDropdown from "./MoreDropdown"

const MainMenu = ({ aboutMore, setAboutMore }) => {
	document.addEventListener("click", (evt) => {
		const id = evt.target.id

		if (id !== "more-button" && aboutMore) {
			setAboutMore(false)
		}

		window.addEventListener("resize", (evt) => {
			const screenSize = evt.target
		})
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
			<div
				onClick={() => setAboutMore(!aboutMore)}
				className="link link-animation"
				id="more-button">
				More
			</div>
			{aboutMore ? <MoreDropdown /> : null}
		</div>
	)
}

export default MainMenu
