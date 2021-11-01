import React, { useEffect } from "react"
import {
	Route,
	Switch,
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
// import DetailedOrganists from "./Library/detailedItem/DetailedOrganists"
// import DetailedComposer from "./Library/detailedItem/DetailedComposer"

const Routes = () => {
	const location = useLocation()
	const params = useParams()

	const albumRoute = useRouteMatch("/album/:id")
	const organistRoute = useRouteMatch("/organist/:id")
	const composerRoute = useRouteMatch("/composer/:id")

	console.log(albumRoute)

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [location])

	useEffect(() => {
		console.log(params, "kdfj")
	}, [params, location])

	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/contact" component={Contact} />
			<Route exact path="/library/:albums/:id" component={DetailedAlbum} />
			{/* <Route exact path="/library/:artists/:id" component={DetailedOrganists} />
			<Route
			exact
			path="/library/:composers/:id"
			component={DetailedComposer}
		/> */}
			<Route exact path="/library" component={Library} />
			<Route exact path="/nowplaying" />
			<Route exact path="/otherstations" component={OtherStations} />
			<Route exact path="/schedule" component={Schedule} />
			<Route exact path="/submitrecordings" component={SubmitRecordings} />
			<Route component={NotFound} />
		</Switch>
	)
}

export default Routes
