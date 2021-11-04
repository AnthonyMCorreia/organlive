import React, { useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

// State
import { getAlbum, setAlbum } from "../../../state/library"

import Skeleton from "./Skeleton"

// Rating Stars
import Stars from "react-rating-stars-component"

const DetailedAlbum = () => {
	const dispatch = useDispatch()

	const paramId = useParams().id
	const album = useSelector((state) => state.library.selectedAlbum)

	useEffect(() => {
		dispatch(getAlbum(paramId))

		return () => {
			dispatch(setAlbum(null))
		}
	}, [paramId, dispatch])

	if (album) {
		console.log(album.rating)
	}

	return (
		<>
			{album ? (
				<div id="detailedAlbum">
					<div id="detailedAlbumInner">
						<div id="detailedAlbumInfo">
							<div id="detailedAlbumTitleRating">
								<h2 id="detailedALbumTitle">
									{album.album} ({album.albumyear})
								</h2>
							</div>
							<p id="detailedAlbumOrganist">
								By
								{Array.isArray(album.organist) ? (
									album.organist.map((organist, index) => {
										return (
											<div key={index}>
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
							</p>
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
							<img
								id="detailedAlbumImage"
								src={`https://s3.amazonaws.com/pictures.organlive.com/large/${album.picture}`}
								alt={album.album}
							/>
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
