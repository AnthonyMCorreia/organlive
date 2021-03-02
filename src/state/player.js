import axios from "axios";

const PLAYER_STATE = "PLAYER_STATE";
const GET_SONG_INFO = "GET_SONG_INFO";

export const setPlayerState = (isPlaying) => ({
  type: PLAYER_STATE,
  isPlaying
});

export const setSong = (song) => ({
  type: GET_SONG_INFO,
  song
});

export const getSong = () => {
  return async (dispatch) => {
    const { data: song } = await axios.get("http://api.organlive.com/playing");
    dispatch(setSong(song));
  };
};

const initialState = {
  song: {},
  isPlaying: false
};

export default function Player(state = initialState, action) {
  switch (action.type) {
    case PLAYER_STATE:
      return { ...state, isPlaying: action.isPlaying };
    case GET_SONG_INFO:
      return { ...state, song: action.song };
    default:
      return state;
  }
}
