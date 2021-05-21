import { useDispatch, useSelector } from "react-redux"
import autoComplete from "autocompleter"

// State
import { getSelectList } from "../../state/search"
import { setList } from "../../state/library"

function Search() {
	const dispatch = useDispatch()

	const {
		lists: { albums, organists, composers }
	} = useSelector((state) => state.library)
	const input = document.getElementById("search-input")

	const { selectedList } = useSelector((state) => state.search)

	const selectList = (evt) => {
		const value = evt?.target?.innerHTML.toLowerCase()

		dispatch(getSelectList(value))
		dispatch(setList(value))
	}

	const undeline = {
		borderBottom: "1.5px solid white"
	}

	return (
		<div id="search">
			<input id="search-input" placeholder="Search our Library" />
			<ul id="list-options-container">
				<li
					className="list-option"
					name="all"
					onClick={selectList}
					style={selectedList === "all" ? undeline : null}>
					All
				</li>
				<li
					className="list-option"
					name="albums"
					onClick={(e) => selectList(e)}
					style={selectedList === "albums" ? undeline : null}>
					Albums
				</li>
				<li
					className="list-option"
					name="organist"
					onClick={selectList}
					style={selectedList === "organist" ? undeline : null}>
					Organists
				</li>
				<li
					className="list-option"
					name="composers"
					onClick={selectList}
					style={selectedList === "composer" ? undeline : null}>
					Composers
				</li>
			</ul>
		</div>
	)
}

export default Search
