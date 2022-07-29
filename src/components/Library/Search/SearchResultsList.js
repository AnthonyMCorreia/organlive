import { useEffect, useState, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate, useSearchParams, useLocation } from "react-router-dom"

// State
import { setListLength, getSearch } from "../../../state/search"

// Components
import AlbumItem from "../listItems/AlbumItem"
import OrganistItem from "../listItems/OrganistItem"
import ComposerItem from "../listItems/ComposerItem"
import Skeleton from "../listItems/Skeleton"

export default function LibraryList() {
	const location = useLocation()
	const dispatch = useDispatch()

	const navigate = useNavigate()
	let [searchParams] = useSearchParams()

	const listRef = useRef(null)

	const [lastLengthChange, setChange] = useState(Date.now())

	const { list, listLength, error, success } = useSelector(
		(state) => state.search
	)

	const arr = new Array(100).fill(null)

	useEffect(() => {
		if (location.pathname === "/library/search" && !location.search) {
			navigate("/library")
		}
	}, [location, navigate])

	useEffect(() => {
		const text = searchParams.get("text")
		const type = searchParams.get("type")
		const sort = searchParams.get("sort")

		if (text && type && sort) {
			dispatch(getSearch(text, type, sort))
		}
	}, [dispatch, searchParams])

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [list])

	useEffect(() => {
		function scrollFunc() {
			const listElement = listRef.current

			if (list) {
				const body = document.body.getBoundingClientRect()
				const listRect = listElement.getBoundingClientRect()
				const listBottom = listRect.top - body.top + listRect.height
				const scrollBottom = window.innerHeight + window.scrollY

				if (listBottom <= scrollBottom) {
					const newLength = listLength + 100

					if (
						newLength <= list.length + 1 &&
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
	}, [dispatch, lastLengthChange, list, listLength])

	return (
		<>
			{success ? (
				<div id="library">
					{error === "No results found" ? (
						<div className="no-results">
							<h2 className="noResultsText">No Results Found</h2>
						</div>
					) : (
						<div id="library-list" ref={listRef}>
							{!list.length > 0
								? arr.map((item, id) => <Skeleton key={id} />)
								: list.slice(0, listLength).map((val) => {
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
					)}
				</div>
			) : null}
		</>
	)
}
