import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

import { getAlbum, setItem } from "../../../state/library"

import { Helmet } from "react-helmet"

import Skeleton from "../listItems/Skeleton"

// Rating Stars
import Stars from "react-rating-stars-component"

const DetailedAlbum = () => {
	const dispatch = useDispatch()

	const paramId = useParams().id
	const album = useSelector((state) => state.library.selectedAlbum)

	useEffect(() => {
		dispatch(getAlbum(paramId))

		return () => {}
		dispatch(setItem(null))
	}, [paramId, dispatch])

	return (
		<div id="DetailedAlbum">
			<Helmet>{/* <title>{album.title}</title> */}</Helmet>
			{album ? (
				<div id="DetailedAlbumInner">
					<div>
						<Stars
							size={20}
							value={JSON.parse(album.rating)}
							color="white"
							activeColor="#41729f"
							edit={false}
							isHalf={true}
						/>
					</div>
				</div>
			) : (
				<Skeleton />
			)}
		</div>
	)
}

export default DetailedAlbum
