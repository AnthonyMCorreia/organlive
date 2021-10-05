import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

// Components
import OrganliveLogo from "../../images/organliveLogo.png"
import MainMenu from "./Main/Menu"
import PhoneMenu from "./Mobile/Menu"

const Header = () => {
	const { isMobile } = useSelector((state) => state.ui)

	return (
		<header id="header">
			<Link className="link" id="title-link" to="/">
				<h1>
					<img src={OrganliveLogo} alt="Organlive" id="title-logo" />
				</h1>
			</Link>
			{isMobile ? <PhoneMenu /> : <MainMenu />}
		</header>
	)
}

export default Header
