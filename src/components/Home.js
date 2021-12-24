import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { toggleRadio, setDocumentTitle } from "../state/ui"

const text =
	"Organlive is a listener-supported internet audio station with a focus on music of the classical organ. We maintain a growing library of music that currently contains over 21,000 tracks. Our library features classical organ music performed on pipe, electronic, and combination instruments recorded all over the world. Follow a link above or below to begin exploring Organlive."

const Home = () => {
	const dispatch = useDispatch()

	const play = () => {
		dispatch(toggleRadio(true))
	}

	useEffect(() => {
		dispatch(setDocumentTitle("Organlive | Home"))
	}, [dispatch])

	return (
		<div id="home">
			<div id="home-inner">
				<h1 id="home-title">Organlive</h1>
				<p id="home-text">{text}</p>
				<button id="home-listen-now" onClick={play}>
					Listen Now
				</button>
			</div>
		</div>
	)
}

export default Home
