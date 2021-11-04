import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams, Link } from "react-router-dom"

import { getOrganist, setOrganist } from "../../../state/library"

import Skeleton from "./Skeleton"
import ErrorPic from "../../../images/not-found.png"

const DetailedOrganist = () => {
	const dispatch = useDispatch()

	const { id } = useParams()
	const organist = useSelector((state) => state.library.selectedOrganist)
	console.log(organist)

	useEffect(() => {
		dispatch(getOrganist(id))

		return () => {
			dispatch(setOrganist(null))
		}
	}, [dispatch, id])
	return (
		<>
			{organist ? (
				<div className="detailedOrganist">
					<div className="detailedOrganistInner">
						<h2 className="detailedOrganistName">{organist.organist}</h2>
						{organist.link !== "" ? (
							<a className="detailedOrganistLink" href={organist.link}>
								Learn More About {organist.organist}
							</a>
						) : null}
						<img
							className="detailedOrganistImage"
							src={
								organist.photo
									? `https://s3.amazonaws.com/pictures.organlive.com/organists/${organist.photo}`
									: ErrorPic
							}
							alt={organist.organist}
						/>
						<p className="detailedOrganistAlbumListDescription">
							Here is some of the work that features {organist.organist}
						</p>
						<div className="detailedOrgnistAlbumList">
							{Object.entries(organist)
								.filter(([key, value]) => {
									const reg = /^\d+$/
									const keyTest = reg.test(key)

									return keyTest
								})
								.map(([key, value]) => {
									return (
										<div
											className="detailedOrganistAlbumContainer"
											key={value.albumid}>
											<p className="detaiedOrganistAlbumName">{value.album}</p>
											<Link to={`/library/albums/${value.albumid}`}>
												<img
													src={`https://s3.amazonaws.com/pictures.organlive.com/${value.picture}`}
													alt={value.album}
												/>
											</Link>
										</div>
									)
								})}
						</div>
					</div>
				</div>
			) : (
				<Skeleton />
			)}
		</>
	)
}

export default DetailedOrganist
