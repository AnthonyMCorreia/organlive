import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import Header from "./Header"
import Routes from "./Routes"

import { useResizeDetector } from "react-resize-detector"

// Components
import Radio from "./Radio"
import Footer from "./Footer"
import DocHead from "./DocHead"

// State
import { toggleMenu, toggleMobile } from "../state/ui"
import { getLibrary } from "../state/library"

function App() {
	const dispatch = useDispatch()

	const { dropdownMenu, isMobile, searchForm } = useSelector(
		(state) => state.ui
	)
	const dataFetched = useSelector((state) => state.library.dataFetched)

	const { width, ref } = useResizeDetector()

	// This is a click event on the entire app to see if the dropdowm menu should be closed if anything but the dropdown menu is clicked on
	const clickHandler = (evt) => {
		const id = evt.target.id

		if (
			!isMobile &&
			id !== "more-button" &&
			id !== "dropdown" &&
			id !== "dropdown" &&
			id !== "mobile-menu" &&
			!evt.target.classList.contains("dropdown-item") &
				!evt.target.classList.contains("dropdown-list") &
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
	}, [dispatch, width])

	useEffect(() => {
		if (!dataFetched) {
			dispatch(getLibrary())
		}
	}, [])

	return (
		<div
			className="App"
			style={{ overflow: searchForm ? "hidden" : "visible" }}
			ref={ref}
			onClick={clickHandler}>
			<Header />
			<Routes />
			<Radio />
			<Footer />
			<DocHead />
		</div>
	)
}

export default App
