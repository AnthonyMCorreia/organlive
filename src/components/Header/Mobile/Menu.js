import { useDispatch, useSelector } from "react-redux"

// Components
import Dropdown from "./Dropdown"

// State
import { toggleMenu } from "../../../state/ui"

const PhoneMenu = () => {
	const dispatch = useDispatch()
	const dropdownMenu = useSelector((state) => state.ui.dropdownMenu)

	return (
		<>
			{!dropdownMenu ? (
				<div
					className="material-icons"
					id="hamburger-icon"
					onClick={() => {
						dispatch(toggleMenu(true))
					}}>
					menu
				</div>
			) : (
				<div id="mobile-menu">
					<div
						className="material-icons x-icon"
						id="x-toggle"
						onClick={() => {
							dispatch(toggleMenu(false))
						}}>
						close
					</div>
					<Dropdown />
				</div>
			)}
		</>
	)
}

export default PhoneMenu
