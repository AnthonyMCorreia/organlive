import React from "react"

const HomepageSection = ({ className }) => {
	return (
		<div className={"home-section " + "section-" + className}>
			<h2 className="section-icons" alt="Eighth Notes">
				♫
			</h2>
			<h2 className={"text-" + className} alt="Muic Info">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation.
			</h2>
		</div>
	)
}

export default HomepageSection
