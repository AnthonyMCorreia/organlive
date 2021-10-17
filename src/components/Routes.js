import React, { useEffect } from "react"
import { Route, Switch, useLocation } from "react-router-dom"

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
import DetailedArtist from "./Library/detailedItem/DetailedArtist"
import DetailedComposer from "./Library/detailedItem/DetailedComposer"

const Routes = () => {
	const routeChange = useLocation()

	const toTop = () => {
		window.scrollTo(0, 0)
	}

	useEffect(() => {
		toTop()
	}, [routeChange])

	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/contact" component={Contact} />
			<Route exact path="/library" component={Library} />
			<Route exact path="/library/:albums/:id" component={DetailedAlbum} />
			{/* <Route exact path="/library/:artists/:id" component={DetailedArtist} />
			<Route
				exact
				path="/library/:composers/:id"
				component={DetailedComposer}
			/> */}
			<Route exact path="/nowplaying" />
			<Route exact path="/otherstations" component={OtherStations} />
			<Route exact path="/schedule" component={Schedule} />
			<Route exact path="/submitrecordings" component={SubmitRecordings} />
			<Route component={NotFound} />
		</Switch>
	)
}

export default Routes
