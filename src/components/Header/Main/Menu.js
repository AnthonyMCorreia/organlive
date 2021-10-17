import { useRef } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { CSSTransition } from "react-transition-group"

// Components
import Dropdown from "./Dropdown"

// State
import { toggleMenu } from "../../../state/ui"

const MainMenu = () => {
	const dispatch = useDispatch()
	const nodeRef = useRef(null)


	const dropdownMenu = useSelector((state) => state.ui.dropdownMenu)

	return (
		<div id="header-content">
			<div id="links">
				<Link className="link" to="/schedule">
					Schedule
				</Link>
				<Link className="link" to="/library">
					Library
				</Link>
				<Link className="link" to="/contact">
					Contact
				</Link>
				{!dropdownMenu ? (
					<button
						className="material-icons link dropdown-arrow"
						onClick={() => dispatch(toggleMenu(true))}>
						keyboard_arrow_down
					</button>
				) : (
					<button
						className="material-icons link dropdown-arrow"
						onClick={() => dispatch(toggleMenu(false))}>
						keyboard_arrow_up
					</button>
				)}
				<div id="dropdown-container">
					<CSSTransition
						in={dropdownMenu}
						unmountOnExit
						timeout={800}
						nodeRef={nodeRef}
						classNames="dropdown-animation">
						<Dropdown ref={nodeRef} />
					</CSSTransition>
				</div>
			</div>
		</div>
	)
}

export default MainMenu
