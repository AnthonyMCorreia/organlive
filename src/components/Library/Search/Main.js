import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

// State
import { selectList } from "../../../state/library"
import {
	setList,
	setFilter,
	setFilteredArray,
	setListLength,
	setSort,
	getList
} from "../../../state/library"

function Search() {
	const dispatch = useDispatch()

	const selectedList = useSelector((state) => state.library.selectedType)
	const { filter, sort } = useSelector((state) => state.library)
	const lists = useSelector((state) => state.library.selectedListsCache)

	const setLibraryList = (evt) => {
		const value = evt?.target?.textContent?.toLowerCase()

		dispatch(selectList(value))
		dispatch(setList(value))
		dispatch(setListLength(100))
		dispatch(setSort("a-z"))
	}

	const inputChange = (elm) => {
		elm.preventDefault()

		const value = elm.target.value
		dispatch(setFilter(value))
	}

	const searchList = (elm) => {
		if (elm.key === "Enter") {
			dispatch(setFilteredArray())
		}
	}

	const selectChange = (elm) => {
		const value = elm.target.value

		if (value !== sort) {
			dispatch(setSort(value))
		}

		if (lists[selectedList][value].length > 0) {
			dispatch(setSort(value))
			
		}
	}

	useEffect(() => {
		document.querySelector(".search-filter-select").value = sort
	}, [sort])

	return (
		<div id="search">
			<label htmlFor="search-input" id="search-input-label">
				Search Library
				<input
					type="text"
					id="search-input"
					onChange={inputChange}
					onKeyDown={searchList}
					value={filter}
				/>
			</label>
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
			<div className="search-select-wrapper">
				<select className="search-filter-select" onChange={selectChange}>
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
							<option value="date-new" className="sort-options">
								Date: New To Old
							</option>
							<option value="date-old" className="sort-options">
								Date: Old To New
							</option>
						</>
					) : null}
				</select>
			</div>
		</div>
	)
}

export default Search
