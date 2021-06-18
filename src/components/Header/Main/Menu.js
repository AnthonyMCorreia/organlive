import React from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

// Components
import MoreDropdown from "./MoreDropdown"

// State
import { toggleMenu } from "../../../state/dropdown"

const MainMenu = () => {
	const dispatch = useDispatch()

	const {
		menu: { open }
	} = useSelector((state) => state)

	document.addEventListener("click", (evt) => {
		const id = evt.target.id

		if (id !== "more-button" && open) {
			toggleMenu(false)
			dispatch(toggleMenu(false))
		}
	})

	return (
		<div id="links">
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
				onClick={() => dispatch(toggleMenu(!open))}
				className="link link-animation"
				id="more-button">
				More
			</div>
			{open ? <MoreDropdown /> : null}
		</div>
	)
}

export default MainMenu
