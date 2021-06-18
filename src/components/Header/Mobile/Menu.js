import React from "react"
import { useDispatch, useSelector } from "react-redux"

// Components
import Dropdown from "./Dropdown"

// State
import { toggleMenu } from "../../../state/dropdown"

const PhoneMenu = () => {
	const dispatch = useDispatch()
	const dropdownState = useSelector((state) => state.menu.open)

	return (
		<>
			{!dropdownState ? (
				<div
					className="material-icons"
					id="hamburger-icon"
					onClick={() => {
						dispatch(toggleMenu(true))
					}}>
					menu
				</div>
			) : (
				<div id="mobile-menu" visible={dispatch ? "1" : "0"}>
					<div
						className="material-icons x-icon"
						id="x-toggle"
						onClick={() => {
							dispatch(toggleMenu(false))
						}}>
						close
					</div>
					<Dropdown />
				</div>
			)}
		</>
	)
}

export default PhoneMenu
