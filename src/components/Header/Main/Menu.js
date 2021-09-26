import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

// Components
import MoreDropdown from "./MoreDropdown"

// State
import { toggleMenu } from "../../../state/ui"

const MainMenu = () => {
	const dispatch = useDispatch()

	const dropdownMenu = useSelector((state) => state.ui.dropdownMenu)

	return (
		<div id="links">
			<Link className="link link-animation" to="/">
				Home
			</Link>
			<Link className="link link-animation" to="/library">
				Library
			</Link>
			<Link className="link link-animation" to="/radio">
				Listen Now
			</Link>
			<Link className="link link-animation" to="/contact">
				Contact
			</Link>
			<div
				onClick={() => dispatch(toggleMenu(!dropdownMenu))}
				className="link link-animation"
				id="more-button">
				More
			</div>
			{dropdownMenu ? <MoreDropdown /> : null}
		</div>
	)
}

export default MainMenu
