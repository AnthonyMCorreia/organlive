import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"

import { toggleMenu } from "../../../state/ui"

const SingleDropdownItem = ({ link, text }) => {
	const dispatch = useDispatch()

	return (
		<li className="dropdown-item" onClick={() => dispatch(toggleMenu(false))}>
			<Link className="dropdown-links" to={link}>
				{text}
			</Link>
		</li>
	)
}

export default SingleDropdownItem
