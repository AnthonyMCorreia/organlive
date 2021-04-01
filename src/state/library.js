import { get } from "axios";

const SET_LIBRARY = "test";

const setLibrary = (library) => ({
  type: SET_LIBRARY,
  library
});

const getLibrary = () => {
  return async () => {};
};

const initialState = {
  library: {}
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_LIBRARY:
      return { ...state, library: action.library };
    default:
      return state;
  }
}

export default reducer;
