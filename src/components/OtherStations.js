import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { setDocumentTitle } from "../state/ui"

import organExperience from "../images/organ_experience.png"
import positivelyBaroque from "../images/positively_baroque.jpg"

const OtherStations = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(setDocumentTitle("Organlive | Other Stations"))
	}, [dispatch])

	return (
		<div id="other-stations">
			<div id="other-stations-inner">
				<div className="other-station-section">
					<a
						target="_blank"
						href="http://www.positivelybaroque.com/"
						rel="noreferrer">
						<img
							src={positivelyBaroque}
							className="other-station-image"
							alt="Positively Baroque"
						/>
					</a>
					<div className="other-station-section-content">
						<h2 className="other-station-title">Positively Baroque</h2>
						<p className="other-station-text">
							Positively Baroque features just the music from our library of the
							Baroque and earlier periods. Like Organlive, the station
							broadcasts 24 hours a day and you can tune in with just a single
							click.
						</p>
					</div>
				</div>
				<div id="other-stations-divider"></div>
				<div className="other-station-section">
					<a
						target="_blank"
						href="http://www.organexperience.com/"
						rel="noreferrer">
						<img
							src={organExperience}
							className="other-station-image"
							alt="Organ Experience"
						/>
					</a>
					<div className="other-station-section-content">
						<h2 className="other-station-title">The Organ Experience</h2>
						<p className="other-station-text">
							The Organ Experience is our newest addition to our lineup. There
							you can hear blocks of 30 minutes to 2 hours of similarly-themed
							music, such as music from a single period, country, or organs by a
							single builder. The station is automated and the playlists are
							generated by a computer, so you never know what you'll hear.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default OtherStations
