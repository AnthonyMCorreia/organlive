import Header from "./Header/"
import { useSelector } from "react-redux"
import Routes from "./Routes"

// Components
import Radio from "./Radio"
import Footer from "./Footer"

function App() {
	const {
		menu: { isOpen }
	} = useSelector((state) => state)

	return (
		<div className="App">
			{isOpen ? null : <Header />}
			<Routes />
			<Radio />
			<Footer />
		</div>
	)
}

export default App
