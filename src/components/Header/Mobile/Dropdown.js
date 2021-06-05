import React from "react"

import DropdownItem from "./DropdownItem"

const Menu = () => {
	return (
		<div id="mobile-menu-list">
			<DropdownItem link="/Library" text="Library" />
			<DropdownItem link="/nowplaying" text="Now Playing" />
			<DropdownItem link="/Contact" text="Contact" />
			<DropdownItem link="/schedule" text="Schedule" />
			<DropdownItem link="/submitrecording" text="Submit Recording" />
			<DropdownItem link="/otherstations" text="Other Stations" />
			<DropdownItem link="/donate" text="Donate" />
		</div>
	)
}

export default Menu
