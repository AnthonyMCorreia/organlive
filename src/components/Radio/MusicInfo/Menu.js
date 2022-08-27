import { useRef } from "react"

import { useSelector, useDispatch } from "react-redux"

import { setRadioSongInfoSelection } from "../../../state/ui"

import useClickOutside from "../../../customHooks/useClickOutside"

const setInfo = setRadioSongInfoSelection

export default function Menu({ setMenuOpen }) {
	const dispatch = useDispatch()

	const ref = useRef(null)

	const infoSelected = useSelector((state) => state.ui.radioSongDisplayedInfo)

	const clickFunc = (e) => {
		e.preventDefault()
		dispatch(setInfo(e.target.innerHTML.toLowerCase()))
		setMenuOpen(false)
	}

	useClickOutside(ref, () => {
		setMenuOpen(false)
	})

	return (
		<div className="radioInfoMenu" ref={ref}>
			<button
				className={
					infoSelected === "work"
						? "radioInfoMenuItem whiteUnderline"
						: "radioInfoMenuItem"
				}
				onClick={clickFunc}>
				Work
			</button>
			<button
				className={
					infoSelected === "album"
						? "radioInfoMenuItem whiteUnderline"
						: "radioInfoMenuItem"
				}
				onClick={clickFunc}>
				Album
			</button>
			<button
				className={
					infoSelected === "artist"
						? "radioInfoMenuItem whiteUnderline"
						: "radioInfoMenuItem"
				}
				onClick={clickFunc}>
				Artist
			</button>
			<button
				className={
					infoSelected === "organ"
						? "radioInfoMenuItem whiteUnderline"
						: "radioInfoMenuItem"
				}
				onClick={clickFunc}>
				Organ
			</button>
		</div>
	)
}
