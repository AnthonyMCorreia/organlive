import React from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"

// State
import { toggleMenu } from "../../../state/dropdown"

const MobileDropdownItem = ({ link, innerHTML }) => {
	const dispatch = useDispatch()

	return (
		<Link
			className="mobile-dropdown-item"
			to={link}
			onClick={() => dispatch(toggleMenu(false))}>
			{innerHTML}
		</Link>
	)
}

export default MobileDropdownItem
