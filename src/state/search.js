import axios from "axios"
import { toggleSearch } from "./ui"

const SET_LIST = "SET_LIST"
const SET_ERROR = "SET_ERROR"
const NO_RESULTS = "NO_RESULTS"
const SUCCESS = "SUCCESS"
const LIST_LENGTH = "LIST_LENGTH"

export const setListLength = (listLength) => ({
	type: LIST_LENGTH,
	listLength
})

export const succesfulSearch = (isSuccess) => ({
	type: SUCCESS,
	isSuccess
})

export const noResults = (results) => ({
	type: NO_RESULTS,
	results
})

export const setError = (error) => ({
	type: SET_ERROR,
	error
})

export const setList = (list) => ({
	type: SET_LIST,
	list
})

// Thunks

export const getSearch = (type, text, order) => {
	const correctType =
		type[type.length - 1] === "s" ? type.slice(0, type.length - 1) : type

	return async (dispatch) => {
		const searchString = encodeURI(
			`https://api.organlive.com/search?${correctType}=${text}&${
				order ? `order=${order}` : ""
			}`
		)

		try {
			const { data } = await axios.get(searchString)

			if (Object.values(data).length === 0) {
				dispatch(noResults(true))
				dispatch(setError("No results found"))
				return
			}

			let list

			if (type === "album") {
				list = Object.values(data).map((value) => {
					return {
						...value,
						name: value.album,
						type
						// id: value.albumid
					}
				})
			} else if (type === "artist") {
				list = Object.values(data).map((value) => {
					return {
						...value,
						name: value.artist,
						type,
						id: value.artistID
					}
				})
			} else if (type === "composer") {
				list = Object.values(data).map((value) => {
					return {
						...value,
						name: value.composer,
						type,
						id: value.composerID
					}
				})
			}

			dispatch(succesfulSearch(true))
			dispatch(setList(list))
			dispatch(setError(""))
			dispatch(toggleSearch(false))
		} catch (error) {
			dispatch(setError("Something went wrong, please try again."))
			dispatch(succesfulSearch(false))
			console.log(error)
		}
	}
}

const initialState = {
	text: "",
	list: [],
	error: "",
	results: true,
	success: false,
	listLength: 50
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case SET_LIST:
			return {
				...state,
				list: action.list
			}
		case SET_ERROR:
			return {
				...state,
				error: action.error
			}
		case NO_RESULTS:
			return {
				...state,
				results: action.results
			}
		case SUCCESS:
			return {
				...state,
				success: action.isSuccess
			}
		case LIST_LENGTH:
			return {
				...state,
				listLength: action.listLength
			}
		default:
			return state
	}
}
