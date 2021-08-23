import React from "react"

import facebook from "../../images/facebook.webp"
import twitter from "../../images/twitter.webp"
import youtube from "../../images/youtube.webp"

const Socials = () => {
	return (
		<div id="socials-home">
			<img src={facebook} alt="facebook" />
			<img src={twitter} alt="twitter" />
			<img src={youtube} alt="youtube" />
		</div>
	)
}

export default Socials
