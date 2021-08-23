import React from "react"
import history from "../../history"

// Picture
import radio from "../../images/radio.webp"

export const mainProps = {
	text:
		"Organlive is a listener-supported internet audio station with a focus on music of the classical organ.",
	key: 0,
	sectionClass: "home-section section-right",
	textClass: "home-section-text",
	iconClass: "section-image listen-button"
}
const image = <img src={radio} className="section-pic" alt="radio" />

const MainSection = () => {
	return (
		<div id="main-section" className={mainProps.sectionClass}>
			<div id="main-section-inner">
				{/* <div id="main-section-content"> */}
				<p className={mainProps.textClass} id="main-section-text">
					{mainProps.text}
				</p>
				<h2 id="listen-now" onClick={() => history.push("/radio")}>
					Listen Now
				</h2>
				{/* </div> */}
			</div>
		</div>
	)
}

export default MainSection
