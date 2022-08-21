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
import { toggleMobile } from "../state/ui"
import { getLibrary } from "../state/library"

function App() {
	const dispatch = useDispatch()

	const { searchForm } = useSelector((state) => state.ui)
	const dataFetched = useSelector((state) => state.library.dataFetched)

	const { width, ref } = useResizeDetector()

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
			ref={ref}>
			<Header />
			<Routes />
			<Radio />
			<Footer />
			<DocHead />
		</div>
	)
}

export default App
