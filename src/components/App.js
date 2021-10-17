import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import Header from "./Header/"
import Routes from "./Routes"

import { useResizeDetector } from "react-resize-detector"

// Components
import Radio from "./Radio"
import Footer from "./Footer"

// State
import { toggleMenu, toggleMobile } from "../state/ui"
import { getLibrary } from "../state/library"

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

	const scrollHandler = (evt) => {
		console.log('kj')
	}

	useEffect(() => {
		if (width <= 1000) {
			dispatch(toggleMobile(true))
		} else {
			dispatch(toggleMobile(false))
		}
	}, [dispatch, width])

	useEffect(() => {
		dispatch(getLibrary())
	}, [])

	return (
		<div
			className="App"
			ref={ref}
			onClick={clickHandler}
			onScroll={scrollHandler}>
			<Header />
			<Routes />
			<Radio />
			<Footer />
		</div>
	)
}

export default App
