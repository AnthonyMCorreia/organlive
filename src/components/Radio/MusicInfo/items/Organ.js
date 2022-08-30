import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export default function Organ() {
	const [intermission, setIntermission] = useState(false)

	const organ = useSelector((state) => state.radio.song.organ)
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
					{organ && (
						<div className="radioInfoOrgan">
							{organ.link ? (
								<h3 className="radioInfoOrganInstitution">
									<a
										href={organ.link}
										target="_blank"
										rel="noreferrer"
										alt={organ.instituion}
										className="radioInfoOrganLink pointer hoverOpacity">
										{organ.instituion}
									</a>
								</h3>
							) : (
								<h3 className="radioInfoOrganInstitution">
									{organ.instituion}
								</h3>
							)}
							<p className="radioInfoOrganDateAndBuilder">
								{organ.builder1} ({organ.date})
							</p>
							<p className="radioInfoOrganLocation">
								{organ.city}, {organ.country}
							</p>
						</div>
					)}
				</>
			)}
		</>
	)
}
