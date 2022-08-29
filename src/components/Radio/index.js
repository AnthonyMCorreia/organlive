import { useSelector } from "react-redux"


// Components
import RadioMain from "./RadioMain"
import RadioSmall from "./RadioSmall"

const Player = () => {
	const { radioOpen, isMobile } = useSelector((state) => state.ui)

	return (
		<>
			{/* {radioOpen ? <RadioMain /> : isMobile ? null : <RadioSmall />} */}
		</>
	)
}

export default Player
