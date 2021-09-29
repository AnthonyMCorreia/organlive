import React from "react"
import DropdownDropdownItem from "./MoreDropdownItem"

const MoreDropdown = () => {
	return (
		<ul className="dropdown-list">
			<DropdownDropdownItem link="/schedule" text="Schedule" />
			<DropdownDropdownItem link="/submitRecording" text="Submit Recording" />
			<DropdownDropdownItem link="/otherStations" text="Other Stations" />
			<DropdownDropdownItem link="/donate" text="Donate" />
		</ul>
	)
}

export default MoreDropdown
