const PLAYER_STATE = "PLAYER_STATE";

export const setPlayerState = (isPlaying) => ({
  type: PLAYER_STATE,
  isPlaying
});

const initialState = {
  isPlaying: false
};

export default function Player(state = initialState, action) {
  switch (action.type) {
    case PLAYER_STATE:
      return { ...state, isPlaying: action.isPlaying };
    default:
      return state;
  }
}
