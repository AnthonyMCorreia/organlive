import React from "react"

// Components
import MobileDropdownItem from "./MoreDropdownItem"

const PhoneMenu = ({ setAboutMore, aboutMore }) => {
	document.addEventListener("click", (evt) => {
		const id = evt.target.id

		if (id !== "hamburger-icon" && aboutMore === true) {
			setAboutMore(false)
		}
	})

	return (
		<div id="mobile-dropdown-menu">
			{!aboutMore ? (
				<span
					className="material-icons hamgurger-icon"
					onClick={() => setAboutMore(!aboutMore)}>
					menu
				</span>
			) : (
				<div id="mobile-menu">
					<MobileDropdownItem link="/Library" text="Library" />
					<MobileDropdownItem link="/nowplaying" text="Now Playing" />
					<MobileDropdownItem link="/Contact" text="Contact" />
					<MobileDropdownItem link="/schedule" text="Schedule" />
					<MobileDropdownItem link="/submitrecording" text="Submit Recording" />
					<MobileDropdownItem link="/otherstations" text="Other Stations" />
					<MobileDropdownItem link="/donate" text="Donate" />
				</div>
			)}
		</div>
	)
}

export default PhoneMenu
