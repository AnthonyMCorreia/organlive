import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"

import { setDocumentTitle } from "../../../state/ui"

import { getComposer, setComposer } from "../../../state/library"

import Skeleton from "./Skeleton"
import NotFound from "../../NotFound"
import AlbumsList from "./AlbumsList"

const DetailedComposer = () => {
	const dispatch = useDispatch()

	const paramId = useParams().id
	const composer = useSelector((state) => state.library.selectedComposer)
	const [moreInfoName, setmoreInfoName] = useState("")

	const notFound = useSelector((state) => state.library.notFound)
	const composersCache = useSelector(
		(state) => state.library.itemsCache.composers
	)

	useEffect(() => {
		if (composer) {
			dispatch(setDocumentTitle(`Organlive | ${composer.name}`))

			if (composer.name) {
				const splitName = composer.name.split(" ")

				splitName.forEach((val, i) => {
					const minusOne = splitName[i - 1]
					const minusOneLastChar = minusOne ? minusOne.slice(-1) : ""

					if (minusOneLastChar === ",") {
						setmoreInfoName(val)
					}
				})
			}
		}
	}, [dispatch, composer])

	useEffect(() => {
		if (composersCache[paramId]) {
			dispatch(setComposer(composersCache[paramId], paramId))
		} else if (!composersCache[paramId]) {
			dispatch(getComposer(paramId))
		}

		return () => {
			dispatch(setComposer(null))
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch, paramId])

	return (
		<>
			{notFound ? (
				<NotFound />
			) : (
				<>
					{composer ? (
						<div className="detailedComposer">
							<div className="detailedComposerInner">
								<h2 className="detailedComposerName">{composer.name}</h2>
								<p className="detailedComposerDates">{composer.dates}</p>
								<a
									className="detailedComposerMoreInfo"
									href={composer.bio}
									target="_blank"
									rel="noreferrer">
									More Info About {moreInfoName}
								</a>
								{composer.albums.length !== 0 ? (
									<p className="detailedComposerAlbumIntro">
										Here is some of the work that features {composer.composer}
									</p>
								) : null}
								<AlbumsList albumList={composer.albums} />
							</div>
						</div>
					) : (
						<Skeleton />
					)}
				</>
			)}
		</>
	)
}

export default DetailedComposer
