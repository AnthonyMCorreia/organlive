import React from "react"

// Components
import HomepageMain from "./HomepageMain"
import OtherStations from "./OtherStations"
import DonateSubmit from "./DonateSubmit"

// Icon Library
import "material-design-icons"

const Homepage = () => {
	return (
		<div id="home">
			<div id="home-inner">
				<HomepageMain />
				<OtherStations />
				<DonateSubmit />
			</div>
		</div>
	)
}

export default Homepage
