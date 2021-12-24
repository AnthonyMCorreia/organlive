import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"

// State
import { setListLength } from "../../state/library"

// Components
import AlbumItem from "./listItems/AlbumItem"
import OrganistItem from "./listItems/OrganistItem"
import ComposerItem from "./listItems/ComposerItem"
import Skeleton from "./listItems/Skeleton"

const LibraryList = () => {
	const dispatch = useDispatch()
	const [lastLengthChange, setChange] = useState(Date.now())

	const { selectedList, listLength } = useSelector(
		(state) => state.library
	)
	const dataFetched = useSelector((state) => state.library.dataFetched)

	const arr = new Array(100).fill(null)

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [selectedList])

	useEffect(() => {
		function scrollFunc() {
			const list = document.getElementById("library-list")

			if (list) {
				const body = document.body.getBoundingClientRect()
				const listRect = list.getBoundingClientRect()
				const listBottom = listRect.top - body.top + listRect.height
				const scrollBottom = window.innerHeight + window.scrollY

				if (listBottom <= scrollBottom) {
					const newLength = listLength + 100

					if (
						newLength <= selectedList.length + 1 &&
						lastLengthChange + 100 < Date.now()
					) {
						dispatch(setListLength(newLength))
						setChange(Date.now())
					}
				}
			}
		}

		document.addEventListener("scroll", scrollFunc)

		return () => {
			document.removeEventListener("scroll", scrollFunc)
		}
	}, [dataFetched, dispatch, lastLengthChange, listLength, selectedList])

	return (
		<div id="library-list">
			{!dataFetched
				? arr.map((item, id) => <Skeleton key={id} />)
				: selectedList.slice(0, listLength).map((val) => {
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
