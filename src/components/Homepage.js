import React from "react"

// Components
import HomepageSection from "./HomepageSection"

const sectionProps = [
	{
		side: "left",
		icon: "e405"
	},
	{
		side: "right",
		icon: ""
	},
	{
		side: "left",
		icon: ""
	}
]

const Homepage = () => {
	return (
		<div id="home">
			{sectionProps.map(({ side, icon }, index) => {
				return <HomepageSection key={index} className={side} icon={icon} />
			})}
		</div>
	)
}

export default Homepage
