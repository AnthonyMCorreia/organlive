import React from "react"
import { useDispatch, useSelector } from "react-redux"

// Components
import AlbumItem from "./AlbumItem"
import OrganistItem from "./OrganistItem"
import ComposerItem from "./ComposerItem"
import LoadMoreButton from "./LoadMoreButton"

const LibraryList = () => {
	const dispatch = useDispatch()
	const { selectedList, listLength } = useSelector((state) => state.library)

	return (
		<div id="library-list-wrapper">
			<div id="library-list">
				{Array.isArray(selectedList)
					? selectedList.slice(0, listLength + 1).map((val, index) => {
							const type = val.type

							if (type === "album") {
								return <AlbumItem val={val} key={index} />
							} else if (type === "organist") {
								return <OrganistItem val={val} key={index} />
							} else {
								return <ComposerItem val={val} key={index} />
							}
					  })
					: null}
				<LoadMoreButton />
			</div>
		</div>
	)
}

export default LibraryList
