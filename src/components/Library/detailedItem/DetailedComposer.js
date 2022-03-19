import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams, Link } from "react-router-dom"
import Stars from "react-rating-stars-component"

import { setDocumentTitle } from "../../../state/ui"

import { getComposer, setComposer } from "../../../state/library"

import Skeleton from "./Skeleton"

const DetailedComposer = () => {
	const dispatch = useDispatch()

	const paramId = useParams().id
	const composer = useSelector((state) => state.library.selectedComposer)

	useEffect(() => {
		if (composer) {
			console.log("composer in")
			dispatch(setDocumentTitle(`Organlive | ${composer.composer}`))
		}
	}, [dispatch, composer])

	useEffect(() => {
		dispatch(getComposer(paramId))

		return () => {
			dispatch(setComposer(null))
		}
	}, [dispatch, paramId])

	return (
		<>
			{composer ? (
				<div className="detailedComposer">
					<div className="detailedComposerInner">
						<h2 className="detailedComposerName">{composer.composer}</h2>
						<a
							className="detailedComposerMoreInfo"
							href={composer.link}
							target="_blank"
							rel="noreferrer">
							More Info About {composer.composer}
						</a>
						{composer.albumList.length !== 0 ? (
							<p className="detailedComposerAlbumIntro">
								Here is some of the work that features {composer.composer}
							</p>
						) : null}
						<div className="detailedComposerAlbumList">
							{/* {composer.albumList.map((album) => {
								return (
									<div
										className="detailedComposerAlbumItem"
										key={album.albumid}>
										<Link
											className="detailedComposerAlbumLink"
											to={`/album/${Number(album.albumid)}`}>
											<img
												src={`http://pictures.organlive.com/large/${album.picture}`}
												alt={album.title}
												className="detailedComposerAlbumImage skeleton"
											/>
											<div className="detailedComposerAlbumInfoContainer">
												<p className="detailedComposerAlbumItemTitle">
													{album.album} ({album.albumyear})
												</p>
												<Stars
													size={15}
													value={Number(album.rating)}
													edit={false}
													isHalf={true}
												/>
											</div>
										</Link>
									</div>
								)
							})} */}
						</div>
					</div>
				</div>
			) : (
				<Skeleton />
			)}
		</>
	)
}

export default DetailedComposer
