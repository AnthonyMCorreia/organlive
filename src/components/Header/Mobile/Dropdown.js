import React, { useEffect } from "react"

import DropdownItem from "./DropdownItem"

const Menu = ({ visible }) => {
	useEffect(() => {
		const origionalOverflow = document.body.style.overflow
		const origionalHight = document.body.style.height

		document.body.style.overflow = "hidden"
		document.body.style.height = "100%"
		return () => {
			document.body.style.overflow = origionalOverflow
			document.body.style.height = origionalHight
		}
	}, [])
	return (
		<div id="mobile-menu-list">
			<DropdownItem link="/Library" innerHTML="Library" />
			<DropdownItem link="/radio" innerHTML="Listen Now" />
			<DropdownItem link="/contact" innerHTML="Contact" />
			<DropdownItem link="/schedule" innerHTML="Schedule" />
			<DropdownItem link="/submitrecording" innerHTML="Submit Recording" />
			<DropdownItem link="/otherstations" innerHTML="Other Stations" />
			<DropdownItem link="/donate" innerHTML="Donate" />
		</div>
	)
}

export default Menu
