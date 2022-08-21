import axios from "axios"
import { toggleSearch } from "./ui"

const SET_LIST = "SET_LIST"
const SET_ERROR = "SET_ERROR"
const NO_RESULTS = "NO_RESULTS"
const SUCCESS = "SUCCESS"
const LIST_LENGTH = "LIST_LENGTH"
const SET_SORT = "SET_SORT"
const SET_TYPE = "SET_TYPE"
const SET_TEXT = "SET_TEXT"
const RESET_SEARCH = "RESET_SEARCH"

export const resetSearch = () => ({
	type: RESET_SEARCH
})

export const setSort = (sort) => ({
	type: SET_SORT,
	sort
})

export const setType = (searchType) => ({
	type: SET_TYPE,
	searchType
})

export const setText = (text) => ({
	type: SET_TEXT,
	text
})

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
			let list = Object.values(data)

			if (list.length === 0) {
				dispatch(noResults(true))
				dispatch(setList(list))
				dispatch(setError("No results found"))
				return
			}



			dispatch(succesfulSearch(true))
			dispatch(noResults(false))
			dispatch(setError(""))
			dispatch(toggleSearch(false))
			dispatch(setList(list))
		} catch (error) {
			dispatch(setError("Something went wrong, please try again."))
			dispatch(succesfulSearch(false))
			console.log(error)
		}
	}
}

const initialState = {
	params: {
		text: "",
		sort: "a-z",
		type: "album"
	},
	list: [],
	error: "",
	noResults: true,
	success: true,
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
				noResults: action.results
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
		case SET_SORT:
			return {
				...state,
				params: {
					...state.params,
					sort: action.sort
				}
			}
		case SET_TYPE:
			return {
				...state,
				params: {
					...state.params,
					type: action.searchType
				}
			}
		case SET_TEXT:
			return {
				...state,
				params: {
					...state.params,
					text: action.text
				}
			}
		case RESET_SEARCH:
			return {
				...state,
				params: {
					text: "",
					sort: "a-z",
					type: "album"
				},
				list: [],
				error: "",
				noResults: true,
				success: true,
				listLength: 50
			}
		default:
			return state
	}
}
