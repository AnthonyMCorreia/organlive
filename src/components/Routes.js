import React, { useEffect } from "react"
import {
	Route,
	Routes,
	useLocation,
	useParams,
	useRouteMatch
} from "react-router-dom"
import history from "../history"

// Components
import Home from "./Home"
import Library from "./Library/"
import Schedule from "./Schedule"
import NotFound from "./NotFound"
import Contact from "./Contact"
import OtherStations from "./OtherStations"
import SubmitRecordings from "./SubmitRecordings"

//Library Items
import DetailedAlbum from "./Library/detailedItem/DetailedAlbum"
import DetailedOrganists from "./Library/detailedItem/DetailedOrganists"
import DetailedComposer from "./Library/detailedItem/DetailedComposer"

const AppRoutes = () => {
	const location = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [location])

	return (
		<Routes>
			<Route exact path="" element={<Home />} />
			<Route exact path="contact" element={<Contact />} />
			<Route exact path="albums/:id" element={<DetailedAlbum />} />
			<Route exact path="organists/:id" element={<DetailedOrganists />} />
			<Route exact path=":composers/:id" element={<DetailedComposer />} />
			<Route exact path="library" element={<Library />} />
			<Route exact path="nowplaying" />
			<Route exact path="otherstations" element={<OtherStations />} />
			<Route exact path="schedule" element={<Schedule />} />
			<Route exact path="submitrecordings" element={<SubmitRecordings />} />
			<Route element={<NotFound />} />
		</Routes>
	)
}

export default AppRoutes
