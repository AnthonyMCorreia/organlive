const SET_LOCATION = "SET_LOCATION";

export const setLocation = (location) => ({
  type: SET_LOCATION,
  location
});

export default function locationReducer(state = {}, action) {
  switch (action.type) {
    case SET_LOCATION:
      return action.location;
    default:
      return state;
  }
}
