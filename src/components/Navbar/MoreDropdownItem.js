import React from "react"
import { Link } from "react-router-dom"

const SingleDropdownItem = ({ link, text }) => {
	return (
		<li className="dropdown-item">
			<Link className="dropdown-links" to={link}>
				{text}
			</Link>
		</li>
	)
}

export default SingleDropdownItem
