const SELECT_LIST = "SELECT_LIST"

export const selectList = (list) => ({
	type: SELECT_LIST,
	list
})

const initialState = {
	selectedList: "all"
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case SELECT_LIST:
			return { ...state, selectedList: action.list }
		default:
			return state
	}
}
