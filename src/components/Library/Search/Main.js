import { useDispatch, useSelector } from "react-redux"

// State
import { setList } from "../../../state/library"

function Search() {
	const dispatch = useDispatch()

	const { selectedList } = useSelector((state) => state.search)

	const selectList = (evt) => {
		const value = evt?.target?.innerHTML.toLowerCase()
		console.log(value)

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
					onClick={selectList}
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
