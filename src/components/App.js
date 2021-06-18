import { useEffect } from "react"
import Header from "./Header/"
import { useDispatch, useSelector } from "react-redux"
import Routes from "./Routes"

// State
import { getLibrary } from "../state/library"

// Components
import Radio from "./Radio"

function App() {
	const dispatch = useDispatch()
	const {
		menu: { isOpen }
	} = useSelector((state) => state)

	useEffect(() => {
		dispatch(getLibrary())
	}, [])

	return (
		<div className="App">
			{isOpen ? null : <Header />}
			<Routes />
			<Radio />
		</div>
	)
}

export default App
