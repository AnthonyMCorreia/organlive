import { useRef } from "react"
import { useSelector } from "react-redux"

import DropdownItem from "./DropdownItem"

// CSS Animations
import { CSSTransition } from "react-transition-group"

const MoreDropdown = () => {
	const dropdownMenu = useSelector((state) => state.ui.dropdownMenu)
	const nodeRef = useRef(null)

	return (
		<div id="dropdown">
			<CSSTransition
				in={dropdownMenu}
				unmountOnExit
				timeout={800}
				classNames="dropdown-animation"
				nodeRef={nodeRef}>
				<nav className="dropdown-list" ref={nodeRef}>
					<DropdownItem link="/schedule" text="Schedule" />
					<DropdownItem link="/submitRecording" text="Submit Recording" />
					<DropdownItem link="/otherStations" text="Other Stations" />
					<DropdownItem link="/donate" text="Donate" />
				</nav>
			</CSSTransition>
		</div>
	)
}

export default MoreDropdown
