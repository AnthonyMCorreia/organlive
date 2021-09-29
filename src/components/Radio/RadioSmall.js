import { useDispatch, useSelector } from "react-redux"

// State
import { toggleRadio } from "../../state/ui"

const RadioSmall = () => {
	const dispatch = useDispatch()
	const isMobile = useSelector((state) => state.ui.isMobile)

	return (
		<div id={isMobile ? "radio-small-mobile" : "radio-small"}>
			<span
				id="radio-small-icon"
				className="material-icons"
				onClick={() => dispatch(toggleRadio(true))}>
				radio
			</span>
		</div>
	)
}

export default RadioSmall
