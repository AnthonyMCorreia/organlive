import React, { useEffect } from "react"
import { useDispatch } from "react-redux"

// Components
import Search from "./Search"
import LibraryList from "./LibraryList"

// State
import getLibrary from "../../state/library"

const Library = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getLibrary())
	}, [])

	return (
		<div id="library">
			<Search />
			<LibraryList />
		</div>
	)
}

export default Library
