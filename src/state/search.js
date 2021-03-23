import { get } from "axios";

const SEARCH_TEXT = "SEARCH_TEXT";
const OPTION = "OPTION";

export const setSearchText = (text) => ({
  type: SEARCH_TEXT,
  text
});

export const setOption = (option) => ({
  type: OPTION,
  option
});

const getSearchRequest = (text, options) => {
  return async (dispatch) => {
    const { data: searchResults } = await get();
  };
};

const initialState = {
  text: "",
  option: ""
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_TEXT:
      return { ...state, text: action.text };
    case OPTION:
      return { ...state, option: action.option };
    default:
      return state;
  }
}

export default reducer;
