// Home Component for Donations and submitting recordings
const DonateSubmit = () => {
	const clickFunc = (e) => {
		e.preventDefault()

		const text = e.target.textContent

		navigator.clipboard.writeText(text)
	}

	return (
		<div className="home-section">
			<div id="donate-submit">
				<div id="donate">
					<h2 id="donate-title">Organlive depends on you</h2>
					<p id="donate-text">
						We rely on listener who enjoy our stations to help us continue to
						broadcast. Find out how you can become a sponsor of the Organ Media
						Foundation.
					</p>
					<button id="home-donate-bttn" className="home-bttn">
						Donate
					</button>
				</div>
				<div id="submit-recording">
					<h2 id="submit-recording-title">Submit Recordings</h2>
					<p id="submit-recording-info">
						If you would like to have your recordings included in our broadcast,
						please send them to:
					</p>
					<p id="submit-recording-addrs" onClick={clickFunc}>
						Organ Media Foundation 6622 Michigan Avenue St. Louis, MO 63111
					</p>
				</div>
			</div>
		</div>
	)
}

export default DonateSubmit
