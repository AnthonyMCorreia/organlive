import axios from "axios";

const PLAYER_STATE = "PLAYER_STATE";
const GET_SONG_INFO = "GET_SONG_INFO";
const UPDATE_CURRENT_TIME = "UPDATE_CURRENT_TIME";
const SET_TIMER = "SET_TIMER";
const MUTE_PLAYER = "MUTE_PLAYER";

export const setPlayerState = (isPlaying) => ({
  type: PLAYER_STATE,
  isPlaying
});

export const setSong = (song) => ({
  type: GET_SONG_INFO,
  song
});

export const updateCurrentTime = (currentTime) => ({
  type: UPDATE_CURRENT_TIME,
  currentTime
});

export const setTimer = (timer) => ({
  type: SET_TIMER,
  timer
});

export const mutePlayer = (previousVolume) => ({
  type: MUTE_PLAYER,
  previousVolume
});

// Thunks

export const getSong = () => {
  return async (dispatch) => {
    const { data: song } = await axios.get("https://api.organlive.com/playing");
    dispatch(setSong(song));
  };
};

export const startSong = () => {
  return (dispatch) => {};
};

const initialState = {
  song: {},
  currentPlayerInfo: {
    currentTime: null,
    isPlaying: false,
    volume: {
      isMuted: false,
      volume: 0.5
    },
    songLength: null
  }
};

export default function Player(state = initialState, action) {
  switch (action.type) {
    case PLAYER_STATE:
      return {
        ...state,
        currentPlayerInfo: {
          ...state.currentPlayerInfo,
          isPlaying: action.isPlaying
        }
      };
    case GET_SONG_INFO:
      return { ...state, song: action.song };
    case UPDATE_CURRENT_TIME:
      return {
        ...state,
        currentPlayerInfo: {
          ...state.currentPlayerInfo,
          currentTime: action.currentTime
        }
      };
    case MUTE_PLAYER:
      return { ...state, previousVolume: action.previousVolume };
    default:
      return state;
  }
}
