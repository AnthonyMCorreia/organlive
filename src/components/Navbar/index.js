import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

// Components
import OrganliveLogo from "../../images/organliveLogo.png"
import MainMenu from "./MainMenu"
import PhoneMenu from "./PhoneMenu"

const Navbar = () => {
	const [aboutMore, setAboutMore] = useState(0)

	useEffect(() => {
		setAboutMore(false)
	}, [])

	return (
		<header id="header">
			<Link className="link" id="title-link" to="/">
				<h1>
					<img src={OrganliveLogo} alt="Organlive" id="title-logo" />
				</h1>
			</Link>
			<div id="header-content">
				{window.innerWidth <= 768 &&
				Screen.orientation !== "landscape-primary" ? (
					<PhoneMenu aboutMore={aboutMore} setAboutMore={setAboutMore} />
				) : (
					<MainMenu aboutMore={aboutMore} setAboutMore={setAboutMore} />
				)}
			</div>
		</header>
	)
}

export default Navbar

/*

Library

no playing

contact schedule

submit recording

other stations

donate

*/
