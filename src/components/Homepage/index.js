import React, { useState } from "react"

// Components
import HomepageInfo from "./HomepageInfo"
// import HomepageCalendar from "./HomepageCalendar"

// Icon Library
import "material-design-icons"

const Homepage = () => {
	return (
		<div id="home">
			<div id="home-inner">
				<HomepageInfo />
			</div>
		</div>
	)
}

export default Homepage
