import { useRef, forwardRef } from "react"

import DropdownItem from "./DropdownItem"

const Dropdown = forwardRef((props, ref) => {
	const nodeRef = useRef(null)

	return (
		<div id="dropdown" ref={ref}>
			<nav className="dropdown-list" ref={nodeRef}>
				<DropdownItem link="/submitRecording" text="Submit Recording" />
				<DropdownItem link="/otherStations" text="Other Stations" />
				<DropdownItem link="/donate" text="Donate" />
			</nav>
		</div>
	)
})

export default Dropdown
