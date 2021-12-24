import { forwardRef } from "react"

import DropdownItem from "./DropdownItem"

const Dropdown = forwardRef((props, ref) => {
	return (
		<div id="dropdown" ref={ref}>
			<nav className="dropdown-list">
				<DropdownItem link="/submitrecordings" text="Submit Recordings" />
				<DropdownItem link="/otherstations" text="Other Stations" />
				<div className="dropdown-item">
					<a
						rel="noreferrer"
						href="http://organ.media/support"
						target="_blank"
						className="dropdown-links">
						Donate
					</a>
				</div>
			</nav>
		</div>
	)
})

export default Dropdown
