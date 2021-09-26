const TOGGLE_MENU = " TOGGLE_MENU"
const TOGGLE_MOBILE = "TOGGLE_MOBILE"
const TOGGLE_RADIO = "TOGGLE_RADIO"

export const toggleRadio = (radioOpen) => ({
	type: TOGGLE_RADIO,
	radioOpen
})

export const toggleMobile = (isMobile) => ({
	type: TOGGLE_MOBILE,
	isMobile
})

export const toggleMenu = (dropdownMenu) => ({
	type: TOGGLE_MENU,
	dropdownMenu
})

const initalState = {
	radioOpen: false,
	dropdownMenu: false,
	isMobile: false
}

function reducer(state = initalState, action) {
	switch (action.type) {
		case TOGGLE_MENU:
			return {
				...state,
				dropdownMenu: action.dropdownMenu
			}
		case TOGGLE_MOBILE:
			return {
				...state,
				isMobile: action.isMobile
			}
		case TOGGLE_RADIO:
			return {
				...state,
				radioOpen: action.radioOpen
			}
		default:
			return state
	}
}

export default reducer
