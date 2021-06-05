import { useEffect } from "react"
import Header from "./Header/"
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
			<Header />
			<Routes />
			{/* <Player /> */}
		</div>
	)
}

export default App
