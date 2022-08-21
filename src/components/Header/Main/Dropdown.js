import { forwardRef } from "react"
import { useDispatch, useSelector } from "react-redux"

// State
import { toggleMenu } from "../../../state/ui"

// Components
import DropdownItem from "./DropdownItem"

// Custom Hooks
import useClickOutside from "../../../customHooks/useClickOutside"

const Dropdown = forwardRef((props, ref) => {
	const dispatch = useDispatch()

	const menuOpen = useSelector((state) => state.ui.dropdownMenu)

	// Closes menu if it's open and clicked outside of it
	useClickOutside(ref, (e) => {
		const className = e.target.classList.contains("dropdown-arrow")
		if (!className) {
			dispatch(toggleMenu(false))
		}
	})

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
