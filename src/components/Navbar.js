import React, { useState } from "react"
import { Link } from "react-router-dom"

// Components
import MoreDropdown from "./MoreDropdown"
import OrganliveLogo from "../images/organliveLogo.png"

const Bar = () => {
	const [aboutMore, setAboutMore] = useState(0)

	return (
		<header id="header">
			<Link className="link" id="title-link" to="/">
				<h1>
					<img src={OrganliveLogo} alt="Organlive" id="title-logo" />
				</h1>
			</Link>
			<div id="header-content">
				<div id="links">
					<Link className="link link-animation" to="/library">
						Library
					</Link>
					<Link className="link link-animation" to="/nowPlaying">
						Now Playing
					</Link>
					<Link className="link link-animation" to="/contact">
						Contact
					</Link>
					<button
						onClick={() => setAboutMore(!aboutMore)}
						className="link link-animation"
						id="more-button"
						to="/">
						More
					</button>
					{aboutMore ? <MoreDropdown /> : null}
				</div>
			</div>
		</header>
	)
}

export default Bar
