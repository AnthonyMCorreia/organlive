import { useDispatch, useSelector } from "react-redux"
import autoComplete from "autocompleter"

// State
import { selectList } from "../../state/search"
import { setList } from "../../state/library"

function Search() {
	const dispatch = useDispatch()

	const {
		lists: { albums, artists, composers }
	} = useSelector((state) => state.library)
	const input = document.getElementById("search-input")

	if (input) {
		autoComplete({
			input,
			fetch: function (text, update) {
				text = text.toLowerCase()

				const albumsArray = Object.keys(albums)
				const composersArray = Object.value(composers)
				const artistsArray = Object.keys(artists)
			}
		})
	}

	const selectList = (evt) => {
		const value = evt.target?.innerText?.toLowerCase()
		// console.log(evt.target.innerText.toLowerCase())

		if (evt.target.innerHTML) {
			console.log(value)
			dispatch(selectList(value))
			dispatch(setList(value))
		}
	}

	return (
		<div id="search">
			test
			<input id="search-input" placeholder="Search our Library" />
			<ul id="list-options-container">
				<li className="list-option" name="all" onClick={selectList}>
					All
				</li>
				<li
					className="list-option"
					name="albums"
					onClick={(e) => selectList(e)}>
					Albums
				</li>
				<li className="list-option" name="artists" onClick={selectList}>
					Arists
				</li>
				<li className="list-option" name="composers" onClick={selectList}>
					Composers
				</li>
			</ul>
		</div>
	)
}

export default Search
