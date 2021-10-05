import { useRef, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { CSSTransition } from "react-transition-group"

// Components
import Dropdown from "./Dropdown"
import RadioSmall from "../../Radio/RadioSmall"

// State
import { toggleMenu } from "../../../state/ui"

const PhoneMenu = () => {
	const dispatch = useDispatch()
	const nodeRef = useRef(null)

	const { dropdownMenu } = useSelector((state) => state.ui)

	useEffect(() => {
		console.log(nodeRef.current)
	}, [])

	return (
		<div id="header-content-mobile">
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
				nodeRef={nodeRef}
				in={dropdownMenu}
				unmountOnExit
				timeout={500}
				classNames="mobile-menu-animation">
				<div id="mobile-menu">
					<Dropdown ref={nodeRef} />
				</div>
			</CSSTransition>
		</div>
	)
}

export default PhoneMenu
