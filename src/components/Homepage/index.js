import React from "react"

// Components
import HomepageMain from "./HomepageMain"
import SocialsOtherStations from "./SocialsOtherStations"

// Icon Library
import "material-design-icons"

const Homepage = () => {
	return (
		<div id="home">
			<div id="home-inner">
				<HomepageMain />
				{/* <SocialsOtherStations /> */}
			</div>
		</div>
	)
}

export default Homepage
