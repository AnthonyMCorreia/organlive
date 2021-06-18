const TOGGLE_MENU = " TOGGLE_MENU"

export const toggleMenu = (isOpen) => ({
	type: TOGGLE_MENU,
	isOpen
})

const initalState = {
	open: false
}

function reducer(state = initalState, action) {
	switch (action.type) {
		case TOGGLE_MENU:
			return {
				...state,
				open: action.isOpen
			}
		default:
			return state
	}
}

export default reducer
