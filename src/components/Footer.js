import React from "react"

import facebook from "../images/facebook.webp"
import twitter from "../images/twitter.webp"
import youtube from "../images/youtube.webp"

const Footer = () => {
	return (
		<div id="footer">
			<p id="footer-text">
				Organlive is a production of the Organ Media Foundation. Visit
				organ.media for more information. All content Copyright © 2019 Organ
				Media Foundation, All Rights Reserved. Thanks for listening!
			</p>
			<div id="socials">
				<img src={youtube} alt="youtube" className="social-icon" />
				<img src={twitter} alt="twitter" className="social-icon" />
				<img src={facebook} alt="facebook" className="social-icon" />
			</div>
		</div>
	)
}

export default Footer
