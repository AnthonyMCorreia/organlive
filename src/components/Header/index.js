import React, { useState } from "react"
import { Link } from "react-router-dom"

// Components
import OrganliveLogo from "../../images/organliveLogo.png"
import MainMenu from "./Main/Menu"
import PhoneMenu from "./Mobile/Menu"

const Header = () => {
	const [width, setWidth] = useState(window.innerWidth)

	window.addEventListener("resize", (evt) => {
		setWidth(evt.innerWidth)
	})

	return (
		<header id="header">
			<Link className="link" id="title-link" to="/">
				<h1>
					<img src={OrganliveLogo} alt="Organlive" id="title-logo" />
				</h1>
			</Link>
			<div id="header-content">
				{width <= 768 ? <PhoneMenu /> : <MainMenu />}
			</div>
		</header>
	)
}

export default Header
