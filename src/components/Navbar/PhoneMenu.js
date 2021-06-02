import React from "react"
import { Link } from "react-router-dom"

// Components
import MobileDropdownItem from "./MoreDropdownItem"

const PhoneMenu = ({ setAboutMore, aboutMore }) => {
	return (
		<div id="mobile-menu">
			<Link className="link link-mobile" to="/library">
				Library
			</Link>
			<Link className="link link-mobile" to="/nowPlaying">
				Now Playing
			</Link>
			<Link className="link link-mobile" to="/contact">
				Contact
			</Link>
			<MobileDropdownItem link="/Library" text="library" />
			<MobileDropdownItem link="/nowplaying" text="Now Playing" />
			<MobileDropdownItem link="/Contact" text="contact" />
			<MobileDropdownItem link="/schedule" text="Schedule" />
			<MobileDropdownItem link="/schedule" text="Schedule" />
			<MobileDropdownItem link="/submitRecording" text="Submit Recording" />
			<MobileDropdownItem link="/otherStations" text="Other Stations" />
			<MobileDropdownItem link="/donate" text="Donate" />
		</div>
	)
}

export default PhoneMenu
