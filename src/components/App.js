import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import Header from "./Header/"
import Routes from "./Routes"

import { useResizeDetector } from "react-resize-detector"

import { toggleMobile } from "../state/ui"

// Components
import Radio from "./Radio"
import Footer from "./Footer"

// State
import { toggleMenu } from "../state/ui"

function App() {
	const dispatch = useDispatch()

	const { dropdownMenu, isMobile } = useSelector((state) => state.ui)

	const { width, height, ref } = useResizeDetector()

	// This is a click event on the entire app to see if the dropdowm menu should be closed if anything but the dropdown menu is clicked on
	const clickHandler = (evt) => {
		const id = evt.target.id

		if (
			id !== "more-button" &&
			id !== "dropdown" &&
			id !== "dropdown" &&
			id !== "mobile-menu" &&
			dropdownMenu
		) {
			dispatch(toggleMenu(false))
		}
	}

	useEffect(() => {
		if (width <= 1000) {
			dispatch(toggleMobile(true))
		} else {
			dispatch(toggleMobile(false))
		}
	}, [width, height, ref, dispatch])

	return (
		<div className="App" ref={ref} onClick={clickHandler}>
			<Header />
			<Routes />
			<Radio />
			<Footer />
		</div>
	)
}

export default App
