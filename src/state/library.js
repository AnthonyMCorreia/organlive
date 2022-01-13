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
				"https://api.organlive.com/library/artist?sort=a-z"
			)

			const { data: composers } = await axios.get(
				"https://api.organlive.com/library/composer?sort=a-z"
			)

			const { data: albums } = await axios.get(
				"https://api.organlive.com/library/album?sort=a-z"
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
	return (dispatch) => {
		axios
			.get(`https://api.organlive.com/library/${type}?sort=${sortParam}`)
			.then((res) => {
				dispatch(setList(res.data))
				dispatch(cacheList(type, sortParam, res.data))
			})
			.catch((err) => {
				console.log(err)
			})
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

				const { data: albumTracks } = await axios.get(
					`https://api.organlive.com/tracks/${albumId}`
				)

				const albumAndOrganist = {
					...album,
					organist: organistInfo,
					albumTracks
				}

				dispatch(setAlbum(albumAndOrganist))
			})
	}
}

export const getOrganist = (id) => {
	return (dispatch) => {
		axios
			.get(`https://api.organlive.com/library/artist/${id}`)
			.then(async (res) => {
				const organist = res.data

				const albumList = await Promise.all(
					Object.entries(organist)
						.filter(([key, value]) => {
							const reg = /^\d+$/
							const keyTest = reg.test(key)
							return keyTest
						})
						.map(async ([key, value]) => {
							const id = value.albumid
							const { data: album } = await axios.get(
								`https://api.organlive.com/library/album/${id}`
							)

							return album.album
						})
				)

				organist.albumList = albumList

				dispatch(setOrganist(organist))
			})
			.catch((err) => {
				console.log(err)
			})
	}
}

export const getComposer = (id) => {
	return async (dispatch) => {
		axios
			.get(`https://api.organlive.com/library/composer/${id}`)
			.then(async (res) => {
				let composer = res.data

				const albumList = await Promise.all(
					Object.entries(composer)
						.filter(([key, value]) => {
							const reg = /^\d+$/
							const keyTest = reg.test(key)
							return keyTest && value !== null
						})
						.map(async ([key, value]) => {
							const id = value.albumid
							const { data: album } = await axios.get(
								`https://api.organlive.com/library/album/${id}`
							)

							return album.album
						})
				)
				composer.albumList = albumList

				dispatch(setComposer(composer))
			})
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
	sort: "a-z"
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
				sort: action.sort,
				selectedList: state.selectedListsCache[state.selectedType][
					state.sort
				].sort((a, b) => {
					const sort = action.sort
					console.log(sort)
					const arrType = state.selectedType

					if (arrType === "artists") {
						if (sort === "a-z") {
							return a.artist.toLowerCase() > b.artist.toLowerCase() ? 1 : -1
						} else if (sort === "z-a") {
							return a.artist.toLowerCase() < b.artist.toLowerCase() ? 1 : -1
						}
					} else if (arrType === "albums") {
						if (sort === "a-z") {
							return a.album.toLowerCase() > b.album.toLowerCase() ? 1 : -1
						} else if (sort === "z-a") {
							return a.album.toLowerCase() < b.album.toLowerCase() ? 1 : -1
						} else if (sort === "date-new") {
							if (a.albumyear !== "" && b.albumyear !== "") {
								return a.albumyear < b.albumyear ? 1 : -1
							}
						} else if (sort === "date-old") {
							if (a.albumyear !== "" && b.albumyear !== "") {
								return a.albumyear > b.albumyear ? 1 : -1
							}
						} else if (sort === "rating") {
							if (a.rating && b.rating) {
								return a.rating > b.rating ? 1 : -1
							}
						}
					} else if (arrType === "composers") {
						if (sort === "a-z") {
							return a.composer.toLowerCase() > b.composer.toLowerCase()
								? 1
								: -1
						} else if (sort === "z-a") {
							return a.composer.toLowerCase() < b.composer.toLowerCase()
								? 1
								: -1
						}
					}
				})
			}
		case CACHE_LIST:
			return {
				...state,
				selectedListsCache: {
					...state.selectedListsCache,
					[action.listType]: {
						...state.lists[action.listType],
						[action.key]: action.value
					}
				}
			}
		default:
			return state
	}
}

export default reducer
