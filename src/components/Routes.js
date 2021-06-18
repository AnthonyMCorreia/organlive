import React from "react"
import { Route, Switch } from "react-router-dom"

// Components
import Home from "./Homepage/"
import Library from "./Library/"
import Radio from "./Radio"
import LibraryItem from "./Library/AlbumItem"
import Schedule from "./Schedule"

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/contact" component={"contact"} />
			<Route exact path="/library" component={Library} />
			{/* <Route exact path="/library/:type/:id" component={LibraryItem} /> */}
			<Route exact path="/nowPlaying" />
			<Route exact path="/schedule" component={Schedule} />
			<Route exact path="/radio" component={Radio} />
		</Switch>
	)
}

export default Routes
