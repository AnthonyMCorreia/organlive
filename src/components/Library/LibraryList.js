import React from "react"
import { useDispatch, useSelector } from "react-redux"

// Components
import AlbumItem from "./listItems/AlbumItem"
import OrganistItem from "./listItems/OrganistItem"
import ComposerItem from "./listItems/ComposerItem"

const LibraryList = () => {
	const { selectedList, listLength } = useSelector((state) => state.library)

	return (
		<div id="library-list">
			{/* <div id="library-list-inner"> */}
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
			{/* </div> */}
		</div>
	)
}

export default LibraryList
