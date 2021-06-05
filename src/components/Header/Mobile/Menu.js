import React, { useState } from "react"

// Components
import Dropdown from "./Dropdown"

const PhoneMenu = () => {
	const [aboutMore, setAboutMore] = useState(false)

	return (
		<div id="mobile-menu">
			{!aboutMore ? (
				<div
					className="material-icons"
					id="hamburger-icon"
					onClick={() => {
						setAboutMore(true)
					}}>
					menu
				</div>
			) : (
				<div id="mobile-dropdown-menu">
					<div
						className="material-icons x-icon"
						id="x-toggle"
						onClick={() => {
							setAboutMore(false)
						}}>
						close
					</div>
					<Dropdown />
				</div>
			)}
		</div>
	)
}

export default PhoneMenu
