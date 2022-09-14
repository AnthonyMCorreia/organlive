import { useEffect, useState } from "react"
import { useParams, useSearchParams, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

// State
import { setListLength, setList, getList } from "../../state/library"

// Components
import AlbumItem from "./listItems/AlbumItem"
import OrganistItem from "./listItems/OrganistItem"
import ComposerItem from "./listItems/ComposerItem"
import Skeleton from "./listItems/Skeleton"

const LibraryList = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const [lastLengthChange, setChange] = useState(Date.now())

	// URL Info
	const { type: typeParam } = useParams()
	const [searchParams] = useSearchParams()
	const sortParam = searchParams.get("sort")

	const { selectedList, listLength, selectedListsCache } = useSelector(
		(state) => state.library
	)
	const dataFetched = useSelector((state) => state.library.dataFetched)

	// Placeholder array while list is being requested
	const arr = new Array(100).fill(null)

	// The below code will default to sort a-z if there isn't a url param specifiying it
	const sortWithDefaultValue = sortParam ? sortParam : "a-z"

	useEffect(() => {
		if (selectedListsCache[typeParam][sortWithDefaultValue].length > 0) {
			dispatch(setList(selectedListsCache[typeParam][sortWithDefaultValue]))
		} else if (
			selectedListsCache[typeParam][sortWithDefaultValue].length === 0
		) {
			dispatch(getList(typeParam, sortWithDefaultValue))
		}
	}, [typeParam, sortWithDefaultValue, selectedListsCache, dispatch])

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [selectedList])

	// This whole useEffect adds more items to the end of the list when the user is getting close the the bottom of the list
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
		<div id="library">
			<div className="labelSelectArrowCont libraryListSort libraryListSortContainer">
				<div className="selectArrowCont selectArrowContWidth">
					<select
						value={sortWithDefaultValue}
						className="searchSelect searchSelectWidth libraryListSortInput"
						onChange={(e) =>
							navigate(`/library/list/${typeParam}?sort=${e.target.value}`)
						}>
						<option value="a-z" className="sort-options">
							Name: A-Z
						</option>
						<option value="z-a" className="sort-options">
							Name: Z-A
						</option>
						{typeParam === "albums" && (
							<option value="rating" className="sort-options">
								Rating
							</option>
						)}
					</select>
					<span className="material-icons selectArrowDown">expand_more</span>
				</div>
			</div>
			<div id="library-list">
				{!selectedList.length > 0
					? arr.map((item, id) => <Skeleton key={id} />)
					: // eslint-disable-next-line array-callback-return
					  selectedList.slice(0, listLength).map((val) => {
							const type = val.type

							if (type === "album" || type === "albums") {
								return <AlbumItem val={val} key={val.id} />
							} else if (type === "organist" || type === "organists") {
								return <OrganistItem val={val} key={val.id} />
							} else if (type === "composer" || type === "composers") {
								return <ComposerItem val={val} key={val.id} />
							}
					  })}
			</div>
		</div>
	)
}

export default LibraryList
