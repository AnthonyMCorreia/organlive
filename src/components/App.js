import { useEffect } from "react"
import Navbar from "./Navbar/"
import { useDispatch } from "react-redux"
import Player from "./Player"
import Routes from "./Routes"

// State
import { getLibrary } from "./../state/library"

function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getLibrary())
	}, [])

	return (
		<div className="App">
			<Navbar />
			<Routes />
			{/* <Player /> */}
		</div>
	)
}

export default App
