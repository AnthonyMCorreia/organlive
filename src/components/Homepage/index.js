import React, { useEffect } from "react"

// Components
import HomepageInfo from "./HomepageInfo"
// import HomepageCalendar from "./HomepageCalendar"

// Icon Library
import "material-design-icons"

import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

const Homepage = () => {
	const home = document.getElementById("home")
	useEffect(() => {

	})
	return (
		<div id="home">
			<div id="home-inner">
				<HomepageInfo />
			</div>
		</div>
	)
}

export default Homepage
