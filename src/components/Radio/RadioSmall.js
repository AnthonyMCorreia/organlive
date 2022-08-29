import { useRef } from "react"
import { useSelector } from "react-redux"

const RadioSmall = () => {
	const nodeRef = useRef(null)

	const isMobile = useSelector((state) => state.ui.isMobile)

	return (
		<div id={isMobile ? "radio-small-mobile" : "radio-small"} ref={nodeRef}>
			<span
				id="radio-small-icon"
				className="material-icons"
				onClick={() =>
					window.open(
						`${window.location.origin}/radio`,
						null,
						"popup,width=350,height=400"
					)
				}>
				radio
			</span>
		</div>
	)
}

export default RadioSmall
