import React from "react"
import { Link } from "react-router-dom"

const MobileDropdownItem = ({ link, innerHTML }) => {
	return (
		<Link className="mobile-dropdown-item" to={link}>
			{innerHTML}
		</Link>
	)
}

export default MobileDropdownItem
