import { useDispatch } from "react-redux"

// State
import { toggleRadio } from "../../state/ui"

const RadioSmall = () => {
	const dispatch = useDispatch()

	return (
		<div id="radio-small">
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
