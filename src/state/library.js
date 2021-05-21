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
			const { data: organists } = await axios.get(
				"https://api.organlive.com/list/artists"
			)

			const { data: composers } = await axios.get(
				"https://api.organlive.com/list/composers"
			)

			const { data: albums } = await axios.get(
				"https://api.organlive.com/list/albums"
			)

			const library = {
				organists,
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
			const albums = Object.entries(action.library.albums).map(
				([key, album]) => {
					return { ...album, type: "album" }
				}
			)

			const organists = Object.entries(action.library.organists).map(
				([key, artist]) => {
					return { ...artist, type: "organist" }
				}
			)

			const composers = Object.entries(action.library.composers).map(
				([key, composer]) => {
					return { ...composer, type: "composer" }
				}
			)

			const all = [...albums, ...organists, ...composers]

			return {
				...state,
				lists: {
					all: all,
					albums,
					organists,
					composers
				},
				selectedList: all
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
