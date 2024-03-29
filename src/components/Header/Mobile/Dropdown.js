import React from "react"

import DropdownItem from "./DropdownItem"

const Menu = ({ visible }) => {
	return (
		<div id="mobile-menu-list" style={{ opacity: visible }}>
			<DropdownItem link="/Library" innerHTML="Library" />
			<DropdownItem link="/radio" innerHTML="Listen Now" />
			<DropdownItem link="/ontact" innerHTML="Contact" />
			<DropdownItem link="/schedule" innerHTML="Schedule" />
			<DropdownItem link="/submitrecording" innerHTML="Submit Recording" />
			<DropdownItem link="/otherstations" innerHTML="Other Stations" />
			<DropdownItem link="/donate" innerHTML="Donate" />
		</div>
	)
}

export default Menu
