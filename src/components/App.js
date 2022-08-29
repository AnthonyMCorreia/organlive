import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom"

import Header from "./Header"
import Routes from "./Routes"

import { useResizeDetector } from "react-resize-detector"
import { isMobile } from "react-device-detect"

// Components
import Footer from "./Footer"
import DocHead from "./DocHead"

// State
import { toggleMobile } from "../state/ui"

function App() {
	const dispatch = useDispatch()
	const { pathname } = useLocation()

	const { searchForm } = useSelector((state) => state.ui)

	const { width, ref } = useResizeDetector()

	useEffect(() => {
		if (width <= 1000) {
			dispatch(toggleMobile(true))
		} else {
			dispatch(toggleMobile(false))
		}
	}, [dispatch, width])

	useEffect(() => {
		if (pathname === "/radio" && !isMobile) {
			document.getElementsByTagName("html")[0].classList.add("overflowR")
		} else if (pathname !== "/radio") {
			document.getElementsByTagName("html")[0].classList.remove("overflowR")
		}
	}, [pathname])

	return (
		<div
			className="App"
			style={{ overflow: searchForm ? "hidden" : "visible" }}
			ref={ref}>
			{pathname !== "/radio" && <Header />}
			<Routes />
			{pathname !== "/radio" && <Footer />}
			<DocHead />
			<audio
				id="stream"
				src="https://play.organlive.com:7010/320"
				type="audio/mpeg">
				Your browser does not support this player.
			</audio>
		</div>
	)
}

export default App
