import facebook from "../../images/facebook.png"
import twitter from "../../images/twitter.png"
import youtube from "../../images/youtube.png"
import instagram from "../../images/instagram.png"

const Socials = () => {
	return (
		<div id="contact-socials">
			<a
				href="https://www.youtube.com/organmediafoundation"
				target="_blank"
				rel="noreferrer">
				<img src={youtube} alt="youtube" className="social-icon" />
			</a>
			<a
				href="https://www.facebook.com/Organlive/"
				target="_blank"
				rel="noreferrer">
				<img src={facebook} alt="facebook" className="social-icon" />
			</a>
			<a href="https://twitter.com/organlive" target="_blank" rel="noreferrer">
				<img src={twitter} alt="twitter" className="social-icon" />
			</a>
			<a
				href="https://www.instagram.com/organmediafoundation/"
				target="_blank"
				rel="noreferrer">
				<img src={instagram} alt="instagram" className="social-icon" />
			</a>
		</div>
	)
}

export default Socials
