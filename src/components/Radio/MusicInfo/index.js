import { useState } from "react"
import { useSelector } from "react-redux"

// Components
import Album from "./items/Album"
import Artist from "./items/Artist"
import Organ from "./items/Organ"
import Work from "./items/Work"
import Menu from "./Menu"

const MusicInfo = () => {
	const [menuOpen, setMenuOpen] = useState(false)

	const infoSelected = useSelector((state) => state.ui.radioSongDisplayedInfo)

	return (
		<div className="radioInfo">
			<span
				className="material-icons expandMore"
				onClick={() => setMenuOpen(!menuOpen)}>
				{menuOpen ? "expand_less" : "expand_more"}
			</span>
			{menuOpen && <Menu setMenuOpen={setMenuOpen} />}
			{infoSelected === "work" && <Work />}
			{infoSelected === "album" && <Album />}
			{infoSelected === "artist" && <Artist />}
			{infoSelected === "organ" && <Organ />}
		</div>
	)
}

export default MusicInfo
