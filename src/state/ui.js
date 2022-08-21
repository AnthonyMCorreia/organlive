const TOGGLE_MENU = "TOGGLE_MENU"
const TOGGLE_MOBILE = "TOGGLE_MOBILE"
const TOGGLE_RADIO = "TOGGLE_RADIO"
const SET_TITLE = "SET_TITLE"
const TOGGLE_SEARCH_FORM = "TOGGLE_SEARCH_FORM"
const RADIO_SONG_DISPLAYED_INFO = "RADIO_SONG_DISPLAYED_INFO"
const RADIO_INFO_MENU_TOGGLE = "RADIO_INFO_MENU_TOGGLE"

export const toggleRadioInfoMenu = (isOpen) => ({
	type: RADIO_INFO_MENU_TOGGLE,
	isOpen
})

export const setRadioSongInfoSelection = (selction) => ({
	type: RADIO_SONG_DISPLAYED_INFO,
	selction
})

export const toggleSearch = (value) => ({
	type: TOGGLE_SEARCH_FORM,
	value
})

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
	documentTitle: "Organlive",
	searchForm: false,
	radioInfoMenu: false,
	radioSongDisplayedInfo: "work"
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
		case TOGGLE_SEARCH_FORM:
			return {
				...state,
				searchForm: action.value
			}
		case RADIO_SONG_DISPLAYED_INFO:
			return { ...state, radioSongDisplayedInfo: action.selction }
		case RADIO_INFO_MENU_TOGGLE:
			return { ...state, radioInfoMenu: action.isOpen }
		default:
			return state
	}
}

export default reducer
