import { useSelector } from "react-redux"
import { Helmet } from "react-helmet-async"

const DocHead = () => {
	const documentHead = useSelector((state) => state.ui.documentTitle)

	return (
		<Helmet>
			<title>{documentHead}</title>
		</Helmet>
	)
}

export default DocHead
