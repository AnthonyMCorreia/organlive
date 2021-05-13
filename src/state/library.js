import axios from "axios"

const SET_LIBRARY = "SET_LIBRARY"
const SET_LENGTH = "SET_LENGTH"
const SET_LIST = "SET_LIST"
const SET_ITEM = "SET_ITEM"

const setLibrary = (library) => ({
	type: SET_LIBRARY,
	library
})

export const setListLength = (length) => ({
	type: SET_LENGTH,
	length
})

export const setList = (list) => ({
	type: SET_LIST,
	list
})

const setItem = (item) => ({
	type: SET_ITEM,
	item
})

export const getLibrary = () => {
	return async (dispatch) => {
		try {
			const { data: artists } = await axios.get(
				"https://api.organlive.com/list/artists"
			)

			const { data: composers } = await axios.get(
				"https://api.organlive.com/list/composers"
			)

			const { data: albums } = await axios.get(
				"https://api.organlive.com/list/albums"
			)

			const library = {
				artists,
				composers,
				albums
			}

			dispatch(setLibrary(library))
		} catch (err) {
			console.log(err)
		}
	}
}

export const getItem = (id) => {
	return async (dispatch) => {}
}

const initialState = {
	lists: {},
	selectedList: [],
	listLength: 100
}

function reducer(state = initialState, action) {
	switch (action.type) {
		case SET_LIBRARY:
			return {
				...state,
				lists: {
					albums: Array.isArray(action.library.albums)
						? action.library.albums
						: Object.entries(action.library.albums),
					artists: Array.isArray(action.library.artists)
						? action.library.artists
						: Object.entries(action.library.artists),
					composers: Array.isArray(action.library.composers)
						? action.library.composers
						: Object.entries(action.library.composers)
				},
				selectedList: Array.isArray(action.library.albums)
					? action.library.albums
					: Object.entries(action.library.albums)
			}
		case SET_LENGTH:
			return {
				...state,
				listLength: action.length
			}
		case SET_LIST:
			return { ...state, selectedList: state.lists[action.list] }
		default:
			return state
	}
}

export default reducer
