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
			if (album.title) {
				dispatch(setDocumentTitle(`Organlive | ${album.title}`))
			} else if (!album.title) {
				dispatch(setDocumentTitle(`Organlive | Album`))
			}
		}
	}, [dispatch, album])

	useEffect(() => {
		dispatch(getAlbum(paramId))

		return () => {
			dispatch(setAlbum(null))
		}
	}, [paramId, dispatch])

	const imageLoaded = (elm) => {
		elm.target.classList.remove("albumImageNotLoaded")
	}


	return (
		<>
			{album ? (
				<div id="detailedAlbum">
					<div id="detailedAlbumInner">
						<div id="detailedAlbumInfo">
							<div id="detailedAlbumTitleRating">
								<h2 id="detailedALbumTitle">
									{album.title}
									{album.albumyear ? ` (${album.albumyear})` : null}
								</h2>
							</div>
							<div id="detailedAlbumOrganist">
								{!album.organist.name && (
									<p
										className={
											Array.isArray(album.organist)
												? "detailedAlbumByArray"
												: "detailedAlbumBy"
										}>
										By
									</p>
								)}
								{Array.isArray(album.organist) ? (
									album.organist.map((organist, index) => {
										return (
											<div
												key={index}
												className="detailedAlbumOrganistLinkContainer">
												<Link
													className="detailedAlbumOrganistLink"
													to={`/organists/${organist.id}`}>
													{organist.organist[organist.artistID].name}
												</Link>
												{index !== album.organist.length - 1 ? ", " : null}
												{index === album.organist.length - 2 ? " and " : null}
											</div>
										)
									})
								) : (
									<Link
										className="detailedAlbumOrganistLink"
										to={`/organists/${album.artistID}`}>
										{album.organist[album.artistID].name}
									</Link>
								)}
							</div>
							<Stars
								size={15}
								value={Number(album.albumrating)}
								edit={false}
								isHalf={true}
							/>
							<div id="detailedAlbumBuyingOptions">
								{album.buyCD !== "" && album.buyCD ? (
									<a
										className="albumBuyingOptions"
										target="_blank"
										rel="noreferrer"
										href={album.buyCD}>
										Buy CD
									</a>
								) : null}
								{album.buyMP3 !== "" && album.buyMP3 ? (
									<a
										className="albumBuyingOptions"
										target="_blank"
										rel="noreferrer"
										href={album.buyMP3}>
										Buy MP3
									</a>
								) : null}
							</div>
							{album.picture !== "" && album.picture !== "na2.jpg" ? (
								<img
									className="detailedAlbumImage albumImageNotLoaded"
									src={
										album.picture === ""
											? ErrorPic
											: `http://pictures.organlive.com/large/${album.picture}`
									}
									alt={album.title}
									onError={imageError}
									onLoad={imageLoaded}
								/>
							) : null}
							{/* <div id="detailedALbumSongList">
								<div className="albumSongListKey">
									<p className="albumSongListKey">#</p>
									<p className="albumSongListTitle">Title</p>
									<p className="albumSongList"></p>
								</div>
							</div> */}
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
