import { useEffect, useState, useRef } from "react"
import { Link } from "react-router-dom"

import Stars from "react-rating-stars-component"

import errorPic from "../../../images/not-found.png"

export default function AlbumsList({ albumList }) {
	const albumsListRef = useRef(null)

	const [albumsLength, setAlbumsLength] = useState(50)
	const [lastLengthChange, setLastLengthChange] = useState(Date.now())

	const imageError = (elm) => {
		elm.target.onError = null
		elm.target.src = errorPic
	}

	// All of this useEffect is to fetch more albums when the user scrolls to the bottom of the list
	useEffect(() => {
		function scrollFunc() {
			const list = albumsListRef.current

			if (list) {
				const body = document.body.getBoundingClientRect()
				const listRect = list.getBoundingClientRect()
				const listBottom = listRect.top - body.top + listRect.height
				const scrollBottom = window.innerHeight + window.scrollY

				if (listBottom <= scrollBottom + 300) {
					const newLength = albumsLength + 50

					if (
						newLength <= albumList.length + 1 &&
						lastLengthChange + 100 < Date.now()
					) {
						setAlbumsLength(newLength)
						setLastLengthChange(Date.now())
					}
				}
			}
		}

		document.addEventListener("scroll", scrollFunc)

		return () => {
			document.removeEventListener("scroll", scrollFunc)
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [lastLengthChange, albumsLength])
	return (
		<div className="detailedAlbumList">
			{albumList.slice(0, albumsLength).map((value) => {
				return (
					<div
						className="detailedAlbumListContainer"
						key={value.id}
						ref={albumsListRef}>
						<Link to={`/albums/${value.id}`} className="detailedAlbumListLink">
							<img
								className="detailedAlbumListImage"
								src={`https://s3.amazonaws.com/pictures.organlive.com/large/${value.picture}`}
								alt={value.album}
								onError={imageError}
							/>
							<div className="detailedAlbumListInfo">
								<p className="detailedAlbumListName">
									{value.album} {value.albumyear && `(${value.albumyear})`}
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
	)
}
