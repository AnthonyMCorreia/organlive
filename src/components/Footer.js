const Footer = () => {
	return (
		<div id="footer">
			<p id="footer-text">
				Organlive is a production of the Organ Media Foundation. Visit{" "}
				<a
					href="http://organ.media"
					target="_blank"
					rel="noreferrer"
					className="organ-media-fotter-link">
					organ.media
				</a>{" "}
				for more information. All content Copyright © {new Date().getFullYear()}{" "}
				Organ Media Foundation, All Rights Reserved. Thanks for listening!
			</p>
		</div>
	)
}

export default Footer
