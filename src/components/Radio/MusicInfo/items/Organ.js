import { useSelector } from "react-redux"

export default function Organ() {
	const organ = useSelector((state) => state.radio.song.organ)

	return (
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
				<h3 className="radioInfoOrganInstitution">{organ.instituion}</h3>
			)}
			<p className="radioInfoOrganDateAndBuilder">
				{organ.builder1} ({organ.date})
			</p>
			<p className="radioInfoOrganLocation">
				{organ.city}, {organ.country}
			</p>
		</div>
	)
}
