import React from "react"

// Components
import HomepageMain from "./HomepageMain"
import Socials from "./Socials"

// Icon Library
import "material-design-icons"

const Homepage = () => {
	return (
		<div id="home">
			<div id="home-inner">
				<HomepageMain />
				{/* <Socials /> */}
			</div>
		</div>
	)
}

export default Homepage
