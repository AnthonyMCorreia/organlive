import axios from "axios"

const PLAYER_STATE = "PLAYER_STATE"
const GET_SONG_INFO = "GET_SONG_INFO"
const UPDATE_CURRENT_TIME = "UPDATE_CURRENT_TIME"
const SET_TIMER = "SET_TIMER"
const SET_VOLUME = "SET_VOLUME"
const TOGGLE_MUTE = "TOGGLE_MUTE"

export const setPlayerState = (isPlaying) => ({
	type: PLAYER_STATE,
	isPlaying
})

export const setSong = (song) => ({
	type: GET_SONG_INFO,
	song
})

export const updateCurrentTime = (currentTime) => ({
	type: UPDATE_CURRENT_TIME,
	currentTime
})

export const setTimer = (timer) => ({
	type: SET_TIMER,
	timer
})

export const setVolume = (volume) => ({
	type: SET_VOLUME,
	volume
})

export const toggleMute = (previousVolume) => ({
	type: TOGGLE_MUTE,
	previousVolume
})

// Thunks

export const getSong = () => {
	return async (dispatch) => {
		const { data: song } = await axios.get("https://api.organlive.com/playing")
		console.log(song)
		dispatch(setSong(song))
	}
}

// export const startSong = () => {
// 	return (dispatch) => {}
// }

const initialState = {
	stream: "https://play.organlive.com:7010/320",
	song: {},
	currentPlayerInfo: {
		currentTime: null,
		isPlaying: false,
		volume: {
			isMuted: false,
			currentVolume: 0.25,
			previousVolume: null
		},
		songLength: null
	}
}

export default function Player(state = initialState, action) {
	switch (action.type) {
		case PLAYER_STATE:
			return {
				...state,
				currentPlayerInfo: {
					...state.currentPlayerInfo,
					isPlaying: action.isPlaying
				}
			}
		case GET_SONG_INFO:
			return { ...state, song: action.song }
		case UPDATE_CURRENT_TIME:
			return {
				...state,
				currentPlayerInfo: {
					...state.currentPlayerInfo,
					currentTime: action.currentTime
				}
			}
		case SET_VOLUME:
			return {...state, currentPlayerInfo: {...state.currentPlayerInfo, volume: action.volume}}
		case TOGGLE_MUTE:
			return { ...state, currentPlayerInfo: {...state.currentPlayerInfo, volume: {...state.volume, isMuted: !state.muted, previousVolume: action.previousVolume}}}
		default:
			return state
	}
}
