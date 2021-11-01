import React from "react"
import { useSelector } from "react-redux"

// Components
import AlbumItem from "./listItems/AlbumItem"
import OrganistItem from "./listItems/OrganistItem"
import ComposerItem from "./listItems/ComposerItem"
import Skeleton from "./listItems/Skeleton"

const LibraryList = () => {
	const { selectedList, listLength } = useSelector((state) => state.library)
	const dataFetched = useSelector((state) => state.library.dataFetched)

	const arr = new Array(30).fill(null)

	return (
		<div id="library-list">
			{!dataFetched
				? arr.map((item, id) => <Skeleton key={id} />)
				: selectedList.slice(0, listLength + 1).map((val) => {
						const type = val.type

						if (type === "album") {
							return <AlbumItem val={val} key={val.id} />
						} else if (type === "organist") {
							return <OrganistItem val={val} key={val.id} />
						} else {
							return <ComposerItem val={val} key={val.id} />
						}
				  })}
		</div>
	)
}

export default LibraryList
