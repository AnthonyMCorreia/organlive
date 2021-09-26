import React, { useEffect } from "react"
import { Route, Switch, useLocation } from "react-router-dom"

// Components
import Home from "./Homepage/"
import Library from "./Library/"
import Radio from "./Radio"
// import LibraryItem from "./Library/AlbumItem"
import Schedule from "./Schedule"
import NotFound from "./NotFound"
import Contact from "./Contact"

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
			{/* <Route exact path="/library/:type/:id" component={LibraryItem} /> */}
			<Route exact path="/nowPlaying" />
			<Route exact path="/schedule" component={Schedule} />
			<Route component={NotFound} />
		</Switch>
	)
}

export default Routes
