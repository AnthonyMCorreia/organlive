const SELECT_SONG = "SELECT_SONG";

const selectSong = (song) => ({
  type: SELECT_SONG,
  song
});

export default function reducer(state = {}, action) {
  switch (action.type) {
    case SELECT_SONG:
      return action.song;
    default:
      return state;
  }
}
