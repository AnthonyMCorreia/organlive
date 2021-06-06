import React, { useState } from "react"

// Components
import Dropdown from "./Dropdown"

const PhoneMenu = () => {
	const [aboutMore, setAboutMore] = useState(false)

	return (
		<>
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
				<div
					className="material-icons x-icon"
					id="x-toggle"
					onClick={() => {
						setAboutMore(false)
					}}>
					close
				</div>
			)}
			<Dropdown visible={aboutMore ? "1" : "0"} />
		</>
	)
}

export default PhoneMenu
