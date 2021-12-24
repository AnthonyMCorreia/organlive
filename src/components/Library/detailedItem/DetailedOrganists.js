import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams, Link } from "react-router-dom"
import Stars from "react-rating-stars-component"

import { getOrganist, setOrganist } from "../../../state/library"
import { setDocumentTitle } from "../../../state/ui"

import Skeleton from "./Skeleton"
import ErrorPic from "../../../images/not-found.png"

const DetailedOrganist = () => {
	const dispatch = useDispatch()

	const { id } = useParams()
	const organist = useSelector((state) => state.library.selectedOrganist)

	const imageError = (elm) => {
		elm.target.onError = null
		elm.target.src = ErrorPic
	}

	useEffect(() => {
		if (organist) {
			dispatch(setDocumentTitle(`Organlive | ${organist.organist}`))
		}
	}, [dispatch, organist])

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
						{organist.link === "" ? null : (
							<a
								className="detailedOrganistLink"
								href={organist.link}
								rel="noreferrer"
								target="_blank">
								Learn More About {organist.organist}
							</a>
						)}
						{organist.photo !== "" &&
						organist.photo !== "na2.jpg" &&
						organist.photo !== null ? (
							<img
								className="detailedOrganistImage"
								src={`https://s3.amazonaws.com/pictures.organlive.com/organists/${organist.photo}`}
								onError={imageError}
								alt={organist.organist}
							/>
						) : null}

						{organist.albumList.length !== 0 ? (
							<p className="detailedOrganistAlbumListDescription">
								Here is some of the work that features {organist.organist}
							</p>
						) : null}
						<div className="detailedOrgnistAlbumList">
							{organist.albumList.map((value) => {
								return (
									<div
										className="detailedOrganistAlbumContainer"
										key={value.albumid}>
										<Link
											to={`/library/albums/${value.albumid}`}
											className="detailedOrganistAlbumLink">
											<img
												className="detailedOrganistAlbumImage"
												src={`https://s3.amazonaws.com/pictures.organlive.com/large/${value.picture}`}
												alt={value.album}
											/>
											<div className="detailedOrganistAlbumInfo">
												<p className="detaiedOrganistAlbumName">
													{value.album} ({value.albumyear})
												</p>
												<Stars
													size={15}
													value={Number(value.rating)}
													edit={false}
													isHalf={true}
												/>
											</div>
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
