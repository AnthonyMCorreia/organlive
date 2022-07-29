import { useEffect } from "react"
import { useDispatch } from "react-redux"

// State
import { setDocumentTitle } from "../../state/ui"

// Components
import Search from "./Search"
import LibraryList from "./LibraryList"

const Library = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		window.scrollTo(0, 0)
		dispatch(setDocumentTitle("Organlive | Library"))
	}, [dispatch])

	return (
		<div id="library">
			<Search />
			<LibraryList />
		</div>
	)
}

export default Library
