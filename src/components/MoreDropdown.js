import React from "react"
import DropdownItem from "./MoreDropdownItem"

const MoreDropdown = () => {
	return (
		// <div className="dropdown">
		<ul className="dropdown-list">
			<DropdownItem num="1" link="/schedule" text="Schedule" />
			<DropdownItem num="1" link="/submitRecording" text="Submit Recording" />
			<DropdownItem num="1" link="/otherStations" text="Other Stations" />
			<DropdownItem num="1" link="/donate" text="Donate" />
		</ul>
		// {/* </div> */}
	)
}

export default MoreDropdown
