import React from "react"

const eighthNote = `${process.env.PUBLIC_URL}/eighthNote.png`

const Homepage = () => {
	return (
		<div id="home">
			<div id="music-container">
				<h2 id="home-main-text">
					<img id="eighth-note" src={eighthNote} alt="Eighth Note" />
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</h2>
			</div>
		</div>
	)
}

export default Homepage
