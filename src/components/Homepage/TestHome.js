import Logo from "../../images/organliveLogo.png"

const text =
	"Organlive is a listener-supported internet audio station with a focus on music of the classical organ. We maintain a growing library of music that currently contains over 21,000 tracks. Our library features classical organ music performed on pipe, electronic, and combination instruments recorded all over the world. Follow a link above or below to begin exploring Organlive."

const Dummy = () => {
	return (
		<div id="dummy-home">
			<div id="dummy-home-inner">
				<div id="dummy-home-content">
					<h1 id="dummy-home-title">Organlive</h1>
					<p id="dummy-home-text">{text}</p>
					<button id="dummy-home-listen-now">Listen Now</button>
				</div>
				{/* <img src={Logo} alt="Organlive Logo" id="dummy-home-logo" /> */}
			</div>
		</div>
	)
}

export default Dummy
