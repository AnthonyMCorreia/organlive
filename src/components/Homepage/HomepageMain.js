import React from "react"
import { useDispatch, useSelector } from "react-redux"

// State
import { changePlaying, getSong } from "../../state/radio"

// Image
import sheetMusic from "../../images/sheetMusic.webp"

const { text, sectionClass, textClass } = {
	text:
		"Organlive is a listener-supported internet audio station with a focus on music of the classical organ. We maintain a growing library of music that currently contains over 21,000 tracks. Our library features classical organ music performed on pipe, electronic, and combination instruments recorded all over the world. Follow a link above or below to begin exploring Organlive.",
	sectionClass: "home-section",
	textClass: "home-section-text text-right"
}

const HomepageMain = () => {
	const dispatch = useDispatch()

	const song = useSelector((state) => state.radio.song)

	const playRadio = () => {
		const audio = document.getElementById("stream")

		if (audio) {
			if (audio.paused) {
				if (!song.housekeeping) {
					dispatch(getSong())
				}
				dispatch(changePlaying(true))
				audio.play()
			}
		}
	}

	return (
		<div className="home-section">
			<div id="home-main-inner">
				<p id="home-main-text">{text}</p>
				<h2 id="listen-now" onClick={playRadio}>
					Listen Now
				</h2>
			</div>
		</div>
	)
}

export default HomepageMain
