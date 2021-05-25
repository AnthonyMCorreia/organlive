import React from "react"

// Components
import HomepageSection from "./HomepageSection"

const sectionProps = ["left", "right", "left"]

const Homepage = () => {
	return (
		<div id="home">
			{sectionProps.map((color, index) => {
				return <HomepageSection key={index} className={color} />
			})}
		</div>
	)
}

export default Homepage
