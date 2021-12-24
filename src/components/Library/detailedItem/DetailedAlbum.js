import React, { useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

import ErrorPic from "../../../images/not-found.png"

// State
import { getAlbum, setAlbum } from "../../../state/library"
import { setDocumentTitle } from "../../../state/ui"

import Skeleton from "./Skeleton"

// Rating Stars
import Stars from "react-rating-stars-component"

const DetailedAlbum = () => {
	const dispatch = useDispatch()

	const paramId = useParams().id
	const album = useSelector((state) => state.library.selectedAlbum)

	const imageError = (elm) => {
		elm.target.onError = null
		elm.target.src = ErrorPic
	}

	useEffect(() => {
		if (album) {
			dispatch(setDocumentTitle(`Organlive | ${album.album}`))
		}
	}, [dispatch, album])

	useEffect(() => {
		dispatch(getAlbum(paramId))

		return () => {
			dispatch(setAlbum(null))
		}
	}, [paramId, dispatch])

	if (album) {
		console.log(album.albumyear)
	}

	return (
		<>
			{album ? (
				<div id="detailedAlbum">
					<div id="detailedAlbumInner">
						<div id="detailedAlbumInfo">
							<div id="detailedAlbumTitleRating">
								<h2 id="detailedALbumTitle">
									{album.album}
									{album.albumyear ? ` (${album.albumyear})` : null}
								</h2>
							</div>
							<div id="detailedAlbumOrganist">
								<p
									className={
										Array.isArray(album.organist)
											? "detailedAlbumByArray"
											: "detailedAlbumBy"
									}>
									By
								</p>
								{Array.isArray(album.organist) ? (
									album.organist.map((organist, index) => {
										return (
											<div
												key={index}
												className="detailedAlbumOrganistLinkContainer">
												<Link
													className="detailedAlbumOrganistLink"
													to={`/library/organists/${organist.id}`}>
													{organist.organist}
												</Link>
												{index !== album.organist.length - 1 ? ", " : null}
												{index === album.organist.length - 2 ? " and " : null}
											</div>
										)
									})
								) : (
									<Link
										className="detailedAlbumOrganistLink"
										to={`/library/organists/${album.organist.id}`}>
										{album.organist.organist}
									</Link>
								)}
							</div>
							<Stars
								size={15}
								value={Number(album.rating)}
								edit={false}
								isHalf={true}
							/>
							<div id="detailedAlbumBuyingOptions">
								{album.buycd !== "" ? (
									<a
										className="albumBuyingOptions"
										target="_blank"
										rel="noreferrer"
										href={album.buycd}>
										Buy CD
									</a>
								) : null}
								{album.buymp3 !== "" ? (
									<a
										className="albumBuyingOptions"
										target="_blank"
										rel="noreferrer"
										href={album.buymp3}>
										Buy MP3
									</a>
								) : null}
							</div>
							{album.picture !== "" && album.picture !== "na2.jpg" ? (
								<img
									className="detailedAlbumImage"
									src={
										album.picture === ""
											? ErrorPic
											: `https://s3.amazonaws.com/pictures.organlive.com/large/${album.picture}`
									}
									alt={album.album}
									onError={imageError}
								/>
							) : null}
						</div>
					</div>
				</div>
			) : (
				<Skeleton />
			)}
		</>
	)
}

export default DetailedAlbum
