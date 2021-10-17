import { useDispatch, useSelector } from "react-redux"

// State
import { selectList } from "../../../state/ui"
import { setList } from "../../../state/library"

function Search() {
	const dispatch = useDispatch()

	const selectedList = useSelector((state) => state.ui.selectedList)

	const setLibraryList = (evt) => {
		const value = evt?.target?.textContent?.toLowerCase()

		dispatch(selectList(value))
		dispatch(setList(value))
	}

	return (
		<div id="search">
			<label htmlFor="search-input" id="search-input-label">
				Search Library
				<input id="search-input" />
			</label>
			<ul id="list-options-container">
				<li
					className={
						selectedList === "all"
							? "list-option-underlinded list-option"
							: "list-option"
					}
					value="all"
					onClick={setLibraryList}>
					All
				</li>
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
		</div>
	)
}

export default Search
