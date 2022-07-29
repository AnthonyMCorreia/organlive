import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"

// State
import {
	setList,
	setListLength,
	setSort,
	getList,
	selectList
} from "../../../state/library"
import { toggleSearch } from "../../../state/ui"

// Components
import SearchForm from "./SearchForm"

function Search() {
	const dispatch = useDispatch()

	const selectRef = useRef(null)

	const selectedList = useSelector((state) => state.library.selectedType)
	const { sort } = useSelector((state) => state.library)
	const lists = useSelector((state) => state.library.selectedListsCache)
	const { searchForm } = useSelector((state) => state.ui)

	const setLibraryList = (evt) => {
		const value = evt?.target?.textContent?.toLowerCase()

		dispatch(selectList(value))
		dispatch(setList(lists[value]["a-z"]))
		dispatch(setListLength(100))
		dispatch(setSort("a-z"))
	}

	const selectChange = (elm) => {
		const value = elm.target.value

		if (value !== sort) {
			dispatch(setSort(value))
		}

		if (lists[selectedList][value].length <= 0) {
			dispatch(getList(selectedList, value))
		} else if (lists[selectedList][value].length > 0) {
			dispatch(setList(lists[selectedList][value]))
		}
	}

	useEffect(() => {
		selectRef.current.value = sort
	}, [sort])

	return (
		<>
			{searchForm && <SearchForm />}
			<div id="search">
				<span
					className="material-icons searchBttn"
					onClick={() => dispatch(toggleSearch(true))}>
					search
				</span>
				<ul id="list-options-container">
					<li
						className={
							selectedList === "albums"
								? "list-option-underlinded list-option"
								: "list-option"
						}
						value="albums"
						onClick={setLibraryList}>
						Albums
					</li>
					<li
						className={
							selectedList === "organists"
								? "list-option-underlinded list-option"
								: "list-option"
						}
						value="organist"
						onClick={setLibraryList}>
						Organists
					</li>
					<li
						className={
							selectedList === "composers"
								? "list-option-underlinded list-option"
								: "list-option"
						}
						value="composers"
						onClick={setLibraryList}>
						Composers
					</li>
				</ul>
				<div>
					<select
						className="searchSelect"
						onChange={selectChange}
						ref={selectRef}>
						<option value="a-z" className="sort-options">
							Name: A-Z
						</option>
						<option value="z-a" className="sort-options">
							Name: Z-A
						</option>
						{selectedList === "albums" ? (
							<>
								<option value="rating" className="sort-options">
									Rating
								</option>
							</>
						) : null}
					</select>
					<span className="material-icons selectArrowDown">expand_more</span>
				</div>
			</div>
		</>
	)
}

export default Search
