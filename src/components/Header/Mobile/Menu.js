import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom"

import { CSSTransition } from "react-transition-group"

// Components
import Dropdown from "./Dropdown"
import RadioSmall from "../../Radio/RadioSmall"

// State
import { toggleMenu, toggleSearch } from "../../../state/ui"

const PhoneMenu = () => {
	const dispatch = useDispatch()
	const nodeRef = useRef(null)

	const { pathname } = useLocation()

	const { dropdownMenu } = useSelector((state) => state.ui)

	return (
		<div id="header-content-mobile">
			{pathname.includes("library") && (
				<span
					className="material-icons searchBttn"
					onClick={() => dispatch(toggleSearch(true))}>
					search
				</span>
			)}
			<RadioSmall />
			{!dropdownMenu ? (
				<button
					className="material-icons mobile-content-item"
					id="hamburger-icon"
					onClick={() => {
						dispatch(toggleMenu(true))
					}}>
					menu
				</button>
			) : null}
			<CSSTransition
				in={dropdownMenu}
				unmountOnExit
				timeout={500}
				nodeRef={nodeRef}
				classNames="mobile-menu-animation">
				<Dropdown ref={nodeRef} />
			</CSSTransition>
		</div>
	)
}

export default PhoneMenu
