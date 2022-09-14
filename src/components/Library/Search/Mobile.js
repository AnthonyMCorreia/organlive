import { useRef } from "react"

import { useDispatch, useSelector } from "react-redux"

import {
	setList,
	setListLength,
	setSort,
	selectList,
	getList
} from "../../../state/library"
import { toggleSearch } from "../../../state/ui"

import SearchForm from "./SearchForm"

export default function MobileSearch(){
	const dispatch = useDispatch()

	const selectRef = useRef(null)

	const {
		sort,
		selectedList,
		selectedListsCache: lists
	} = useSelector((state) => state.library)
	const { searchForm } = useSelector((state) => state.ui)

	const setLibraryList = (evt) => {
		const value = evt?.target?.value?.toLowerCase()

		selectRef.current.value = value

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

	return (
		<>
			{searchForm && <SearchForm />}
			<div id="mobile-search">
				<div className="selectArrowCont">
					<select
						ref={selectRef}
						name="lists"
						className="searchSelect"
						onChange={setLibraryList}>
						<option value="albums">Albums</option>
						<option value="organists">Organists</option>
						<option value="composers">Composers</option>
					</select>
					<span
						className="material-icons selectArrowDown"
						onClick={() => dispatch(toggleSearch(true))}>
						expand_more
					</span>
				</div>
				<div className="selectArrowCont searchSelectArrowCont">
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
