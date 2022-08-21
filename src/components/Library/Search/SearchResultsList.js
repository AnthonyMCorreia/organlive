import { useEffect, useState, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate, useSearchParams, useLocation } from "react-router-dom"

// State
import {
	setListLength,
	getSearch,
	resetSearch
} from "../../../state/search"

// Components
import SearchItem from "./SearchItem"
import Skeleton from "../listItems/Skeleton"

export default function LibraryList() {
	const location = useLocation()
	const dispatch = useDispatch()

	const navigate = useNavigate()
	let [searchParams] = useSearchParams()

	const listRef = useRef(null)

	const [lastLengthChange, setChange] = useState(Date.now())

	const { list, listLength, noResults } = useSelector(
		(state) => state.search
	)

	const { type, text, sort } = useSelector((state) => state.search.params)

	const arr = new Array(100).fill(null)

	useEffect(() => {
		// Checks to see if there are no search parameters, if there are none, it redirects to the main library page
		if (location.pathname === "/library/search" && !location.search) {
			navigate("/library")
		}
	}, [location, navigate])

	useEffect(() => {
		const textParam = searchParams.get("text")
		const typeParam = searchParams.get("type")
		const sortParam = searchParams.get("sort")

		if (textParam && typeParam && sortParam) {
			dispatch(getSearch(typeParam, textParam, sortParam))
		}
	}, [dispatch, searchParams, location, text, type, sort])

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

	useEffect(() => {
		return () => {
			dispatch(resetSearch())
		}
	}, [dispatch])

	return (
			<div id="library">
				{noResults ? (
					<div className="no-results">
						<h2 className="noResultsText">No Results Found</h2>
					</div>
				) : (
					<div id="library-list" ref={listRef}>
						{!list.length > 0
							? arr.map((item, id) => <Skeleton key={id} />)
							: list.slice(0, listLength).map((val) => {
									return <SearchItem val={val} key={val.songid} />
							  })}
					</div>
				)}
			</div>
	)
}
