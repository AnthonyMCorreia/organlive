import { useSelector } from "react-redux"

// Components
import Main from "./Main"
import Mobile from "./Mobile"

const Search = () => {
	const isMobile = useSelector((state) => state.ui.isMobile)
	return <>{isMobile ? <Mobile /> : <Main />}</>
}

export default Search
