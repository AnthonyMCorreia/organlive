import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"

import { CSSTransition } from "react-transition-group"

// Components
import Dropdown from "./Dropdown"

// State
import { toggleMenu } from "../../../state/ui"

const PhoneMenu = () => {
	const dispatch = useDispatch()
	const nodeRef = useRef(null)

	const { dropdownMenu } = useSelector((state) => state.ui)

	return (
		<div id="header-content-mobile">
				<button
					id="radio-small-icon"
					onClick={() =>
						window.open(
							`${window.location.origin}/radio`,
							null,
							"popup,width=350,height=400"
						)
					}>
					Listen
				</button>
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
