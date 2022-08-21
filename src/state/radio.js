import axios from "axios"

const GET_SONG_INFO = "GET_SONG_INFO"
const SET_VOLUME = "SET_VOLUME"
const TOGGLE_MUTE = "TOGGLE_MUTE"
const SET_PREVIOUS_VOLUME = "SET_PREVIOUS_VOLUME"
const PLAYING_STATE = "PLAYING_STATE"
const CHANGE_CURRENT_TIME = "CHANGE_CURRENT_TIME"
const SET_SECONDS_ARRAY = "SET_SECONDS_ARRAY"
const SET_CURRENT_DATE = "SET_CURRENT_DATE"
const SONG_DONE = "SONG_DONE"
const PLAY_BTTN_PRESSED = "PLAY_BTTN_PRESSED"

export const playBttnPressed = () => ({
	type: PLAY_BTTN_PRESSED
})

export const setSongDone = (isDone) => ({
	type: SONG_DONE,
	isDone
})

export const setDate = (date) => ({
	type: SET_CURRENT_DATE,
	date
})

export const setSecondsArray = (arr) => ({
	type: SET_SECONDS_ARRAY,
	arr
})

export const changeCurrentTime = (currentTime) => ({
	type: CHANGE_CURRENT_TIME,
	currentTime
})

export const setSong = (song) => ({
	type: GET_SONG_INFO,
	song
})

export const setVolume = (volume) => ({
	type: SET_VOLUME,
	volume
})

export const toggleMute = (muted) => ({
	type: TOGGLE_MUTE,
	muted
})

export const setPreviousVolume = (previousVolume) => ({
	type: SET_PREVIOUS_VOLUME,
	previousVolume
})

export const changePlaying = (isPlaying) => ({
	type: PLAYING_STATE,
	isPlaying
})

// Thunks
export const getSong = () => {
	console.log("getSong()")

	return async (dispatch) => {
		try {
			const { data: song } = await axios.get(
				"https://api.organlive.com/1/playing"
			)
			const { timeout, hid } = song.housekeeping

			dispatch(setSong(song))

			setTimeout(() => {
				console.log("setSong, timeout complete")

				dispatch(checkForRefresh(hid))
			}, timeout)
		} catch (err) {
			console.log(err)
		}
	}
}

export const checkForRefresh = (currentSongId) => {
	console.log("checkForRefresh() called")
	return async (dispatch) => {
		try {
			const { data: response } = await axios.get(
				`https://api.organlive.com/1/playing/${currentSongId}`
			)

			if (response.housekeeping.refresh === "yes") {
				console.log("checkForRefresh() houskeeping === yes")
				dispatch(getSong())
			} else if (response.housekeeping.refresh === "no") {
				console.log(
					"checkForRefresh() houskeeping === no",
					response.housekeeping.timeout
				)
				setTimeout(() => {
					console.log("setTimeout called")
					dispatch(checkForRefresh(currentSongId))
				}, response.housekeeping.timeout * 1000)
			}
		} catch (err) {
			console.log(err)
		}
	}
}

const initialState = {
	song: {},
	currentPlayerInfo: {
		isDone: false,
		volume: {
			isMuted: false,
			currentVolume: 0.5,
			previousVolume: 0.5
		},
		time: {
			isPlaying: false,
			currentTime: null,
			currentDate: null,
			playButtonPressed: false
		},
		songListCache: [],
		lastSongUpdateRequest: null
	}
}

export default function Player(state = initialState, action) {
	switch (action.type) {
		case GET_SONG_INFO:
			const currentTime =
				+action.song.housekeeping.song_duration -
				+action.song.housekeeping.timeout
			return {
				...state,
				song: action.song,
				currentPlayerInfo: {
					...state.currentPlayerInfo,
					time: {
						...state.currentPlayerInfo.time,
						currentTime: currentTime,
						currentDate: Date.now()
					}
				}
			}
		case SET_VOLUME:
			return {
				...state,
				currentPlayerInfo: {
					...state.currentPlayerInfo,
					volume: {
						...state.currentPlayerInfo.volume,
						currentVolume: action.volume
					}
				}
			}
		case TOGGLE_MUTE:
			return {
				...state,
				currentPlayerInfo: {
					...state.currentPlayerInfo,
					volume: {
						...state.currentPlayerInfo.volume,
						isMuted: action.muted,
						previousVolume: state.currentPlayerInfo.volume.previousVolume
					}
				}
			}
		case SET_PREVIOUS_VOLUME:
			return {
				...state,
				currentPlayerInfo: {
					...state.currentPlayerInfo,
					volume: {
						...state.currentPlayerInfo.volume,
						previousVolume: action.previousVolume
					}
				}
			}
		case PLAYING_STATE:
			return {
				...state,
				currentPlayerInfo: {
					...state.currentPlayerInfo,
					time: {
						...state.currentPlayerInfo.time,
						isPlaying: action.isPlaying
					}
				}
			}
		case CHANGE_CURRENT_TIME:
			return {
				...state,
				currentPlayerInfo: {
					...state.currentPlayerInfo,
					time: {
						...state.currentPlayerInfo.time,
						currentTime: action.currentTime
					}
				}
			}
		case SET_CURRENT_DATE:
			return {
				...state,
				currentPlayerInfo: {
					...state.currentPlayerInfo,
					time: {
						...state.currentPlayerInfo.time,
						currentDate: action.date
					}
				}
			}
		case SONG_DONE:
			return {
				...state,
				currentPlayerInfo: {
					...state.currentPlayerInfo,
					isDone: action.isDone
				}
			}
		case PLAY_BTTN_PRESSED:
			return {
				...state,
				currentPlayerInfo: {
					...state.currentPlayerInfo,
					time: {
						...state.currentPlayerInfo.time,
						playButtonPressed: action.playButtonPressed
					}
				}
			}
		default:
			return state
	}
}
