import axios from "axios";

const SET_LIBRARY = "SET_LIBRARY";
const SET_LENGTH = "SET_LENGTH";
const SET_LIST = "SET_LIST";

const setLibrary = (library) => ({
  type: SET_LIBRARY,
  library
});

export const setListLength = (length) => ({
  type: SET_LENGTH,
  length
});

export const setList = (list) => ({
  type: SET_LIST,
  list
});

export const getLibrary = () => {
  return async (dispatch) => {
    try {
      const { data: artists } = await axios.get(
        "http://api.organlive.com/list/artists"
      );

      const { data: composers } = await axios.get(
        "http://api.organlive.com/list/composers"
      );

      const { data: albums } = await axios.get(
        "http://api.organlive.com/list/albums"
      );

      const library = {
        artists,
        composers,
        albums
      };

      dispatch(setLibrary(library));
    } catch (err) {
      console.log(err);
    }
  };
};

const initialState = {
  lists: {},
  selectedList: [],
  listLength: 100
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_LIBRARY:
      return {
        ...state,
        lists: {
          albums: Array.isArray(action.library.albums)
            ? action.library.albums
            : Object.entries(action.library.albums),
          artists: Array.isArray(action.library.artists)
            ? action.library.artists
            : Object.entries(action.library.artists),
          composers: Array.isArray(action.library.composers)
            ? action.library.composers
            : Object.entries(action.library.composers)
        }
      };
    case SET_LENGTH:
      return {
        ...state,
        listLength:
          state.lists[state.selectedList].length < state.listLength + 100
            ? state.listLength + 100
            : state.listLength
      };
    case SET_LIST:
      return { ...state, selectedList: action.list };
    default:
      return state;
  }
}

export default reducer;
