const TOGGLE_MENU = " TOGGLE_MENU"
const TOGGLE_MOBILE = "TOGGLE_MOBILE"
const TOGGLE_RADIO = "TOGGLE_RADIO"
const SET_TITLE = "SET_TITLE"

export const setDocumentTitle = (title) => ({
	type: SET_TITLE,
	title
})


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
	isMobile: false,
	documentTitle: "Organlive"
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
		case SET_TITLE:
			return {
				...state,
				documentTitle: action.title
			}
		default:
			return state
	}
}

export default reducer
