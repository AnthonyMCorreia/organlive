import { useEffect, useState, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams, Link } from "react-router-dom"
import Stars from "react-rating-stars-component"

import { setDocumentTitle } from "../../../state/ui"

import { getComposer, setComposer } from "../../../state/library"

import Skeleton from "./Skeleton"
import NotFound from "../../NotFound"
import AlbumsList from './AlbumsList'

import errorPic from "../../../images/not-found.png"

const DetailedComposer = () => {
	const dispatch = useDispatch()

	const paramId = useParams().id
	const composer = useSelector((state) => state.library.selectedComposer)
	const [moreInfoName, setmoreInfoName] = useState("")

	const notFound = useSelector((state) => state.library.notFound)

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
		dispatch(getComposer(paramId))

		return () => {
			dispatch(setComposer(null))
		}
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
								<AlbumsList albumList={composer.albums}/>
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
