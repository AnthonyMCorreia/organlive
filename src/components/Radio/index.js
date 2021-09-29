import { useSelector } from "react-redux"

// Components
import RadioMain from "./RadioMain"
import RadioSmall from "./RadioSmall"

const Player = () => {
	const { dropdownMenu, radioOpen, isMobile } = useSelector((state) => state.ui)

	return (
		<>
			<audio id="stream" src="https://play.organlive.com:7010/320">
				Your browser does not support this player.
			</audio>
			{radioOpen ? <RadioMain /> : isMobile ? null : <RadioSmall />}
		</>
	)
}

export default Player
