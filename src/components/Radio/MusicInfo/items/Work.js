import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export default function Work() {
	const [intermission, setIntermission] = useState(false)

	const work = useSelector((state) => state.radio.song.work)
	let list = useSelector((state) => state.continuousTimer.songList)

	useEffect(() => {
		if (list[0]) {
			if (list[0].intermission) {
				setIntermission(true)
			} else if (!list[0].intermission) {
				setIntermission(false)
			}
		}
	}, [list])

	return (
		<>
			{intermission ? (
				<p className="radioInfoIntermission">Intermission</p>
			) : (
				<>
					{work && (
						<div className="music-info">
							<h4 className="music-info-title">
								<p className="music-info-title-p">{work.title}</p>
							</h4>
							<div className="music-info-link-container">
								<a
									className={`musicInfoArtistLink ${
										work.composer_link && "hoverOpacity pointer"
									}`}
									target="_blank"
									href={work.composer_link ? work.composer_link : null}
									rel="noreferrer">
									{work.composer}
								</a>
							</div>
							<div className="radioInfoWorkBuyingOptions">
								{work.buyMP3 && (
									<a
										className="radioInfoWorkBuyingOptionsItemLink"
										target="_blank"
										href={work.buyMP3}
										rel="noreferrer">
										Buy MP3
									</a>
								)}
								{work.PDFsheetmusic && (
									<a
										className="radioInfoWorkBuyingOptionsItemLink"
										target="_blank"
										href={work.PDFsheetmusic}
										rel="noreferrer">
										PDF Sheet Music
									</a>
								)}
								{work.Buysheetmusic && (
									<a
										className="radioInfoWorkBuyingOptionsItemLink"
										target="_blank"
										href={work.Buysheetmusic}
										rel="noreferrer">
										Buy Sheet Music
									</a>
								)}
							</div>
						</div>
					)}
				</>
			)}
		</>
	)
}
