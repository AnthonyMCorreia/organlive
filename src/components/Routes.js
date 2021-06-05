import React from "react"
import { Route, Switch } from "react-router-dom"

// Components
import Home from "./Homepage/"
import Library from "./Library/"
import LibraryItem from "./Library/AlbumItem"
import Schedule from "./Schedule"

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>
			<Route exact path="/contact">
				contact
			</Route>
			<Route exact path="/:type/:name">
				<LibraryItem />
			</Route>
			<Route exact path="/library">
				<Library />
			</Route>
			<Route exact path="nowPlaying">
				now Playing
			</Route>
			<Route exact path="/schedule">
				<Schedule />
			</Route>
		</Switch>
	)
}

export default Routes
