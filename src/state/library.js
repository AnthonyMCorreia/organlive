import axios from "axios"

const SET_LIBRARY = "SET_LIBRARY"
const SET_LENGTH = "SET_LENGTH"
const SET_ITEM = "SET_ITEM"
const SET_LIST = "SET_LIST"

export const setList = (list) => ({
	type: SET_LIST,
	list
})

export const setItem = (list) => ({
	type: SET_ITEM,
	list
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
		await axios
			.get(`https://api.organlive.com/library/album/${albumId}`)
			.then(async (res) => {
				const album = res.data.album
				const organist = await axios.get(
					`https://api.organlive.com/library/artist/${album.artistid}`
				)

				const albumAndOrganist = {
					...album,
					organist: organist.data
				}

				console.log(albumAndOrganist)

				dispatch(setItem(albumAndOrganist))
			})
	}
}

const initialState = {
	lists: {},
	selectedList: [],
	listLength: 100,
	selectedItem: null,
	dataFetched: false
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
				selectedList: all,
				dataFetched: true
			}
		case SET_LENGTH:
			return {
				...state,
				listLength: action.length
			}
		case SET_ITEM:
			return { ...state, selectedItem: action.item }
		case SET_LIST:
			return { ...state, selectedList: state.lists[action.list] }
		default:
			return state
	}
}

export default reducer
