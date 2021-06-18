import React from "react"

// Components
import HomepageSection from "./HomepageSection"
import MainSection from "./MainSection"

//Home Sections Info
import componentInfo from "./text"

// Images
import sheetMusic from "../../images/sheetMusic.webp"
import organHands from "../../images/organHands.webp"

const HomepageInfo = () => {
	const { text, icon, key, textClass, sectionClass } = componentInfo[0]

	const {
		text: text2,
		icon: icon2,
		key: key2,
		textClass: textClass2,
		sectionClass: sectionClass2
	} = componentInfo[1]

	return (
		<>
			<HomepageSection
				text={text}
				icon={icon}
				key={key}
				textClass={textClass}
				sectionClass={sectionClass}
				image={sheetMusic}
			/>
			<MainSection />
			<HomepageSection
				text={text2}
				icon={icon2}
				key={key2}
				textClass={textClass2}
				sectionClass={sectionClass2}
				image={organHands}
			/>
		</>
	)
}

export default HomepageInfo
