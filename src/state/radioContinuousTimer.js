import axios from "axios"

import { setSong } from "./radio"

const ADD_SONG = "ADD_SONG"
const ADD_INTERMISION = "ADD_INTERMISION"
const REMOVE_FIRST_SONG = "REMOVE_FIRST_SONG"

export const removeSong = () => ({
	type: REMOVE_FIRST_SONG
})

export const addIntermision = (info) => ({
	type: ADD_INTERMISION,
	info
})

export const addSong = (song) => ({
	type: ADD_SONG,
	song
})

// Thunks
export const getSong = (isFirstCall = false) => {
	return async (dispatch) => {
		try {
			const { data: song } = await axios.get(
				"https://api.organlive.com/1/playing"
			)
			const { timeout, hid } = song.housekeeping

			dispatch(addSong(song))

			if (isFirstCall) {
				dispatch(setSong(song))
			}

			setTimeout(() => {
				dispatch(checkForRefresh(hid))
			}, timeout)
		} catch (err) {
			console.log(err)
		}
	}
}

export const checkForRefresh = (currentSongId) => {
	return async (dispatch) => {
		try {
			const { data: response } = await axios.get(
				`https://api.organlive.com/1/playing/${currentSongId}`
			)

			if (!response.housekeeping.timeout) {
				checkForRefresh(currentSongId)
				return
			}

			if (response.housekeeping.refresh === "yes") {
				dispatch(getSong())
			} else if (response.housekeeping.refresh === "no") {
				dispatch(addIntermision(response))

				setTimeout(() => {
					dispatch(checkForRefresh(currentSongId))
				}, response.housekeeping.timeout)
			}
		} catch (err) {
			console.log(err)
		}
	}
}

export const removeSongAndChangeSelected = (newSong) => {
	return (dispatch) => {
		dispatch(removeSong())
		dispatch(setSong(newSong))
	}
}

const initialState = {
	songList: []
}

export default function Player(state = initialState, action) {
	switch (action.type) {
		case ADD_SONG:
			return {
				...state,
				songList: [...state.songList, { ...action.song, timeAdded: Date.now() }]
			}
		case ADD_INTERMISION:
			return {
				...state,
				songList: [
					...state.songList,
					{ intermision: true, length: action.housekeeping.timeout }
				]
			}
		case REMOVE_FIRST_SONG:
			return {
				...state,
				songList: state.songList.slice(1)
			}
		default:
			return state
	}
}
