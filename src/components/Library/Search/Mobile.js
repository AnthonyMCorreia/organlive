import { useDispatch } from "react-redux"

import { setList } from "../../../state/library"

const MobileSearch = () => {
	const dispatch = useDispatch()

	const selectChange = (elm) => {
		elm.preventDefault()
		const list = elm.target.value

		dispatch(setList(list))
	}

	return (
		<div id="mobile-search">
			<div id="search-input-container">
				<label id="mobile-search-input-label" htmlFor="mobile-search-input">
					Search Our Library
				</label>
				<input
					type="text"
					id="mobile-search-input"
					name="mobile-search-input"
				/>
			</div>
			<select name="lists" id="mobile-search-select" onChange={selectChange}>
				<option value="albums">Albums</option>
				<option value="organists">Organists</option>
				<option value="composers">Composers</option>
			</select>
		</div>
	)
}

export default MobileSearch
