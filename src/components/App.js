import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useParams } from "react-router-dom"

// Document Head
import Head from "./Head"

import Header from "./Header"
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
	const params = useParams()
	const location = useLocation()

	useEffect(() => {
		// console.log("params app", params.id)
	}, [params, location])

	const { dropdownMenu } = useSelector((state) => state.ui)

	const { width, ref } = useResizeDetector()

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
	}, [dispatch, width])

	useEffect(() => {
		dispatch(getLibrary())
	}, [])

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
