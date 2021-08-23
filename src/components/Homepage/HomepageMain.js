import React from "react"

import sheetMusic from "../../images/sheetMusic.webp"

const { text, sectionClass, textClass } = {
	text:
		"Organlive is a listener-supported internet audio station with a focus on music of the classical organ. We maintain a growing library of music that currently contains over 21,000 tracks. Our library features classical organ music performed on pipe, electronic, and combination instruments recorded all over the world. Follow a link above or below to begin exploring Organlive.",
	sectionClass: "home-section",
	textClass: "home-section-text text-right"
}

const HomepageMain = () => {
	return (
		<div className={sectionClass}>
			<div className="home-section-inner">
				<p className={textClass}>{text}</p>
				<img src={sheetMusic} alt="filler" className="section-pic" />
			</div>
		</div>
	)
}

export default HomepageMain
