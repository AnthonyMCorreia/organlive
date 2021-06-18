import React from "react"

const HomepageSection = ({ text, sectionClass, textClass, image }) => {
	return (
		<div className={sectionClass}>
			<div className="home-section-inner">
				<p className={textClass}>{text}</p>
				<img src={image} alt="filler" className="section-pic" />
			</div>
		</div>
	)
}

export default HomepageSection
