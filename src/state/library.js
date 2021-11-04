import axios from "axios"

const SET_LIBRARY = "SET_LIBRARY"
const SET_LENGTH = "SET_LENGTH"
const SET_LIST = "SET_LIST"
const SET_ALBUM = "SET_ALBUM"
const SET_COMPOSER = "SET_COMPOSER"
const SET_ORGANIST = "SET_ORGANIST"

export const setComposer = (composer) => ({
	type: SET_ORGANIST,
	composer
})

export const setOrganist = (organist) => ({
	type: SET_ORGANIST,
	organist
})

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
		await axios
			.get(`https://api.organlive.com/library/album/${albumId}`)
			.then(async (res) => {
				const album = res.data.album
				let organistInfo

				if (Array.isArray(album.artistid)) {
					const artistArr = await Promise.all(
						album.artistid.map(async (id) => {
							const { data: artist } = await axios.get(
								`https://api.organlive.com/library/artist/${id}`
							)

							return artist
						})
					)
					organistInfo = [...artistArr]
				} else {
					const { data } = await axios.get(
						`https://api.organlive.com/library/artist/${album.artistid}`
					)

					organistInfo = data
				}

				const albumAndOrganist = {
					...album,
					organist: organistInfo
				}

				dispatch(setAlbum(albumAndOrganist))
			})
	}
}

export const getOrganist = (id) => {
	return (dispatch) => {
		axios.get(`https://api.organlive.com/library/artist/${id}`).then((res) => {
			const organist = res.data
			dispatch(setOrganist(organist))
		})
	}
}

const initialState = {
	lists: {},
	selectedList: [],
	listLength: 100,
	selectedAlbum: null,
	selectedOrganist: null,
	selectedComposer: null
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
		case SET_ALBUM:
			return { ...state, selectedAlbum: action.album }
		case SET_ORGANIST:
			return { ...state, selectedOrganist: action.organist }
		case SET_COMPOSER:
			return { ...state, selectedComposer: action.composer }
		case SET_LIST:
			return { ...state, selectedList: state.lists[action.list] }
		default:
			return state
	}
}

export default reducer
