import React, { useEffect, forwardRef } from "react"
import { useDispatch } from "react-redux"

import DropdownItem from "./DropdownItem"

import { toggleMenu } from "../../../state/ui"

const Dropdown = forwardRef((props, ref) => {
	const dispatch = useDispatch()

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
		<div id="mobile-menu" ref={ref}>
			<div
				className="material-icons x-icon"
				id="x-toggle"
				onClick={() => {
					dispatch(toggleMenu(false))
				}}>
				close
			</div>
			<div id="mobile-menu-list">
				<DropdownItem link="/library" innerHTML="Library" />
				<DropdownItem link="/contact" innerHTML="Contact" />
				<DropdownItem link="/schedule" innerHTML="Schedule" />
				<DropdownItem link="/submitrecording" innerHTML="Submit Recording" />
				<DropdownItem link="/otherstations" innerHTML="Other Stations" />
				<a
					rel="noreferrer"
					href="http://organ.media/support"
					target="_blank"
					className="mobile-dropdown-item">
					Donate
				</a>
			</div>
		</div>
	)
})

export default Dropdown
