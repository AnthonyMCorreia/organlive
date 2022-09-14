import axios from "axios"

import { setSong } from "./radio"

const ADD_SONG = "ADD_SONG"
const ADD_INTERMISSION = "ADD_INTERMISSION"
const REMOVE_FIRST_SONG = "REMOVE_FIRST_SONG"

export const removeSong = () => ({
	type: REMOVE_FIRST_SONG
})

export const addIntermission = (info) => ({
	type: ADD_INTERMISSION,
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

			if (response.housekeeping.refresh === "yes") {
				dispatch(getSong())
			} else if (response.housekeeping.refresh === "no") {
				const setTimeoutTime =
					response.housekeeping.timeout === 0
						? 1000
						: response.housekeeping.timeout

				console.log("housekeeping === no", response)
				dispatch(addIntermission(response))

				setTimeout(() => {
					dispatch(checkForRefresh(currentSongId))
				}, setTimeoutTime)
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
		case ADD_INTERMISSION:
			return {
				...state,
				songList: [
					...state.songList,
					{
						intermission: true,
						housekeeping: {
							timeout: action.info.housekeeping.timeout
						},
						timeAdded: Date.now()
					}
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
