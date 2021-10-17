import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

import { getAlbum } from "../../../state/library"

// Rating Stars
import Stars from "react-rating-stars-component"

const DetailedAlbum = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getAlbum(paramId))
	}, [])

	const paramId = useParams().id
	const album = useSelector((state) => state.library.selectedAlbum)
	console.log(album)

	return (
		<div id="DetailedAlbum">
			<div id="DetailedAlbumInner">
				<div>
					<Stars
						size={20}
						value={2.5}
						color="white"
						activeColor="#41729f"
						edit={false}
						isHalf={true}
					/>
				</div>
			</div>
		</div>
	)
}

export default DetailedAlbum
