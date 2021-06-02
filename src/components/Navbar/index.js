import React, { useState } from "react"
import { Link } from "react-router-dom"

// Components
import OrganliveLogo from "../../images/organliveLogo.png"
import MainMenu from "./MainMenu"
import PhoneMenu from "./PhoneMenu"

const Navbar = () => {
	const [aboutMore, setAboutMore] = useState(0)

	document.addEventListener("click", (evt) => {
		const id = evt.target.id

		if (id !== "more-button" && aboutMore === true) {
			setAboutMore(false)
		}
	})

	return (
		<header id="header">
			<Link className="link" id="title-link" to="/">
				<h1>
					<img src={OrganliveLogo} alt="Organlive" id="title-logo" />
				</h1>
			</Link>
			<div id="header-content">
				{window.innerWidth <= 768 ? <PhoneMenu /> : <MainMenu />}
			</div>
		</header>
	)
}

export default Navbar
