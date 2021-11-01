import { Helmet } from "react-helmet"
import { useSelector } from "react-redux"

const Head = () => {
	const title = useSelector((state) => state.library.selectedItem)

	return (
		<Helmet>
			<title>
				{title.type === "album"
					? title.album
					: title.type === "artist"
					? title.artist
					: title.organist}
			</title>
		</Helmet>
	)
}

export default Head
