import { Route, Routes } from "react-router-dom"

// Components
import Home from "./Home"
import Library from "./Library/"
import Schedule from "./Schedule"
import NotFound from "./NotFound"
import Contact from "./Contact"
import OtherStations from "./OtherStations"
import SubmitRecordings from "./SubmitRecordings"
import SearchResultsList from "./Library/Search/SearchResultsList"
import Radio from "./Radio/RadioMain"

//Library Items
import DetailedAlbum from "./Library/detailedItem/DetailedAlbum"
import DetailedOrganists from "./Library/detailedItem/DetailedOrganists"
import DetailedComposer from "./Library/detailedItem/DetailedComposer"

//Library List
import LibraryList from "./Library/LibraryList"

const AppRoutes = () => {
	return (
		<Routes>
			<Route exact path="" element={<Home />} />
			<Route exact path="contact" element={<Contact />} />
			<Route exact path="library/albums/:id" element={<DetailedAlbum />} />
			<Route
				exact
				path="library/organists/:id"
				element={<DetailedOrganists />}
			/>
			<Route
				exact
				path="library/composers/:id"
				element={<DetailedComposer />}
			/>
			<Route exact path="library/list/:type" element={<LibraryList />} />
			<Route exact path="library" element={<Library />} />
			<Route exact path="nowplaying" />
			<Route exact path="otherstations" element={<OtherStations />} />
			<Route exact path="schedule" element={<Schedule />} />
			<Route exact path="submitrecordings" element={<SubmitRecordings />} />
			<Route path="library/search" element={<SearchResultsList />} />
			<Route path="radio" element={<Radio />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	)
}

export default AppRoutes
