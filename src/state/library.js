import axios from "axios"

const SET_LIBRARY = "SET_LIBRARY"
const SET_LENGTH = "SET_LENGTH"
const SET_LIST = "SET_LIST"
const SET_ALBUM = "SET_ALBUM"
const SET_COMPOSER = "SET_COMPOSER"
const SET_ORGANIST = "SET_ORGANIST"
const SET_FILTER = "SET_FILTER"
const SET_FILTERED_ARRAY = "SET_FILTERED_ARRAY"
const SET_SORT = "SET_SORT"
const SELECTED_LIST = "SELECTED_LIST"
const CACHE_LIST = "CACHE_LIST"
const NOT_FOUND = "NOT_FOUND"

export const notFound = (notFound) => ({
	type: NOT_FOUND,
	notFound
})

export const cacheList = (listType, key, value) => ({
	type: CACHE_LIST,
	listType,
	key,
	value
})

export const selectList = (list) => ({
	type: SELECTED_LIST,
	list
})

export const setSort = (sort) => ({
	type: SET_SORT,
	sort
})

export const setFilter = (filter) => ({
	type: SET_FILTER,
	filter
})

export const setFilteredArray = () => ({
	type: SET_FILTERED_ARRAY
})

export const setComposer = (composer) => ({
	type: SET_COMPOSER,
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
				"https://api.organlive.com/list/artist"
			)

			const { data: composers } = await axios.get(
				"https://api.organlive.com/list/composer"
			)

			const { data: albums } = await axios.get(
				"https://api.organlive.com/list/album"
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

export const getList = (type, sortParam) => {
	// gets ride of the s at the end of the list type - albums -> album
	const paramTypeString =
		type === "organists" ? "artist" : type.slice(0, type.length - 1)

	return (dispatch) => {
		axios
			.get(`https://api.organlive.com/list/${paramTypeString}/${sortParam}`)
			.then((res) => {
				const list = res.data.map((item) => {
					return { ...item, type }
				})
				dispatch(setList(list))
				dispatch(cacheList(type, sortParam, list))
			})
			.catch((err) => {
				console.log(err)
			})
	}
}

export const getAlbum = (albumId) => {
	return async (dispatch) => {
		if (isNaN(+albumId)) {
			dispatch(notFound(true))
			return
		}

		try {
			const {
				data: { album }
			} = await axios.get(`https://api.organlive.com/library/album/${albumId}`)
			let organistInfo

			if (!album.title) {
				dispatch(notFound(true))
				return
			}

			if (Array.isArray(album.id)) {
				const artistArr = await Promise.all(
					album.artistid.map(async (id) => {
						const { data: artist } = await axios.get(
							`https://api.organlive.com/library/artist/${album.artistID}`
						)

						return artist
					})
				)
				organistInfo = [...artistArr]
			} else {
				const { data } = await axios.get(
					`https://api.organlive.com/library/artist/${album.artistID}`
				)

				organistInfo = data

				if (data.length === 1) {
					organistInfo = data[0]
				}
			}

			const { data } = await axios.get(
				`https://api.organlive.com/library/tracks/${albumId}`
			)

			const albumTracks = Object.entries(data).map(([key, value]) => {
				return { ...value, key: +key }
			})

			const albumAndOrganist = {
				...album,
				organist: organistInfo,
				albumTracks
			}

			dispatch(setAlbum(albumAndOrganist))
		} catch (error) {
			if (error.response.status === 404) {
				dispatch(notFound(true))
			}
		}
	}
}

export const getOrganist = (id) => {
	return async (dispatch) => {
		if (isNaN(+id)) {
			dispatch(notFound(true))
			return
		}

		try {
			const { data: organist } = await axios.get(
				`https://api.organlive.com/library/artist/${id}`
			)

			if (!organist.name) {
				dispatch(notFound(true))
				return
			}

			organist.id = id

			const albumList = Object.values(organist.albums)
			organist.albums = albumList

			dispatch(setOrganist(organist))
		} catch (error) {
			if (error.response.status === 404) {
				dispatch(notFound(true))
			}
		}
	}
}

export const getComposer = (id) => {
	return async (dispatch) => {
		if (isNaN(+id)) {
			dispatch(notFound(true))
			return
		}

		try {
			const { data: composer } = await axios.get(
				`https://api.organlive.com/library/composer/${id}`
			)

			if (!composer.name) {
				dispatch(notFound(true))
				return
			}

			const albums = Object.values(composer.albums)
			composer.albums = albums

			dispatch(setComposer(composer))
		} catch (error) {
			if (error.response.status === 404) {
				dispatch(notFound(true))
			}
		}
	}
}

const initialState = {
	lists: {},
	selectedList: [],
	selectedListsCache: {
		albums: {
			"a-z": [],
			"z-a": [],
			rating: []
		},
		organists: {
			"a-z": [],
			"z-a": []
		},
		composers: {
			"a-z": [],
			"z-a": []
		}
	},
	selectedType: "albums",
	listLength: 100,
	selectedAlbum: null,
	selectedOrganist: null,
	selectedComposer: null,
	filter: "",
	sort: "a-z",
	notFound: false,
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

			return {
				...state,
				selectedListsCache: {
					albums: {
						...state.selectedListsCache.albums,
						"a-z": albums
					},
					organists: {
						...state.selectedListsCache.organists,
						"a-z": organists
					},
					composers: {
						...state.selectedListsCache.composers,
						"a-z": composers
					}
				},
				selectedList: albums,
				dataFetched: true
			}
		case SET_LENGTH:
			return {
				...state,
				listLength: action.length
			}
		case SELECTED_LIST:
			return {
				...state,
				selectedType: action.list
			}
		case SET_ALBUM:
			return { ...state, selectedAlbum: action.album }
		case SET_ORGANIST:
			return { ...state, selectedOrganist: action.organist }
		case SET_COMPOSER:
			return { ...state, selectedComposer: action.composer }
		case SET_LIST:
			return { ...state, selectedList: action.list }
		case SET_FILTER:
			return { ...state, filter: action.filter }
		case SET_FILTERED_ARRAY:
			const arrType = state.selectedType

			return {
				...state,
				listLength: 100,
				selectedList: state.lists[arrType]
					// eslint-disable-next-line array-callback-return
					.filter((item) => {
						if (item) {
							if (item.artist) {
								return item.artist
									.toLowerCase()
									.includes(state.filter.toLowerCase())
							} else if (item.composer) {
								return item.composer
									.toLowerCase()
									.includes(state.filter.toLowerCase())
							} else if (item.album) {
								return item.album
									.toLowerCase()
									.includes(state.filter.toLowerCase())
							}
						}
					})
					// eslint-disable-next-line array-callback-return
					.sort((a, b) => {
						const sort = action.sort

						if (a.artist && b.artist) {
							if (sort === "a-z") {
								return a.artist.toLowerCase() > b.artist.toLowerCase() ? 1 : -1
							}
						} else if (a.album && b.album) {
							if (sort === "a-z") {
								return a.album.toLowerCase() > b.album.toLowerCase() ? 1 : -1
							}
						} else {
							if (sort === "a-z") {
								return a.composer.toLowerCase() > b.composer.toLowerCase()
									? 1
									: -1
							}
						}
					})
			}
		case SET_SORT:
			return {
				...state,
				sort: action.sort
			}
		case CACHE_LIST:
			const listTypeMinusS = state.selectedType.slice(0, -1)

			const list = action.value.map((value) => {
				return { ...value, type: listTypeMinusS }
			})

			return {
				...state,
				selectedListsCache: {
					...state.selectedListsCache,
					[action.listType]: {
						...state.selectedListsCache[action.listType],
						[action.key]: list
					}
				}
			}
		case NOT_FOUND:
			return {
				...state,
				notFound: action.notFound
			}
		default:
			return state
	}
}

export default reducer
