import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

// Components
import OrganliveLogo from "../../images/organliveLogo.png"
import MainMenu from "./Main/Menu"
import PhoneMenu from "./Mobile/Menu"

const Header = () => {
	const [aboutMore, setAboutMore] = useState(false)
	const [screenWidth, setScreenWidth] = useState(window.innerWidth)

	window.addEventListener("resize", (evt) => {
		const width = evt.target.innerWidth

		setScreenWidth(width)
	})

	return (
		<header id="header">
			<Link className="link" id="title-link" to="/">
				<h1>
					<img src={OrganliveLogo} alt="Organlive" id="title-logo" />
				</h1>
			</Link>
			<div id="header-content">
				{screenWidth <= 990 ? (
					<PhoneMenu aboutMore={aboutMore} setAboutMore={setAboutMore} />
				) : (
					<MainMenu aboutMore={aboutMore} setAboutMore={setAboutMore} />
				)}
			</div>
		</header>
	)
}

export default Header
