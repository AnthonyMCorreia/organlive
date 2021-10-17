import axios from "axios"

const SET_LIBRARY = "SET_LIBRARY"
const SET_LENGTH = "SET_LENGTH"
const SET_ALBUM = "SET_ALBUM"
const SET_LIST = "SET_LIST"

export const setList = (list) => ({
	type: SET_LIST,
	list
})

export const setAlbum = (album) => ({
	type: SET_ALBUM,
	album
})

const setLibrary = (library) => ({
	type: SET_LIBRARY,
	library
})

export const setListLength = (length) => ({
	type: SET_LENGTH,
	length
})

export const getLibrary = () => {
	return async (dispatch) => {
		try {
			const { data: organists } = await axios.get(
				"https://api.organlive.com/library/artist"
			)

			const { data: composers } = await axios.get(
				"https://api.organlive.com/library/composer"
			)

			const { data: albums } = await axios.get(
				"https://api.organlive.com/library/album"
			)

			const library = {
				organists,
				composers,
				albums
			}

			dispatch(setLibrary(library))
		} catch (err) {
			new Error(err.message)
		}
	}
}

export const getAlbum = (albumId) => {
	return async (dispatch) => {
		try {
			const { data } = await axios.get(
				`https://api.organlive.com/library/album/${albumId}`
			)

			dispatch(setAlbum(data.album))
		} catch (err) {
			console.log(err)
		}
	}
}

// export const getList = (list) => {
// 	return (dispatch) => {
// 		try {
// 			dispatch(setList(list))
// 		} catch (err) {
// 			console.log(err)
// 		}
// 	}
// }

const initialState = {
	lists: {},
	selectedList: [],
	listLength: 100,
	selectedAlbum: {}
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
					all,
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
		case SET_ALBUM:
			return { ...state, selectedAlbum: action.album }
		case SET_LIST:
			return { ...state, selectedList: state.lists[action.list] }
		default:
			return state
	}
}

export default reducer
