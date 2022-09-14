import { Link } from "react-router-dom"

export default function LibraryListOptions() {
	return (
		<div className="libraryListOptions">
			<h4 className="libraryListOptionsTitle">Lists</h4>
			<div className="libraryListOptionsWords">
				<Link
					to="/library/list/albums?sort=a-z"
					className="libraryListOptionsWord pointer hoverOpacity">
					Albums
				</Link>
				<Link
					to="/library/list/organists?sort=a-z"
					className="libraryListOptionsWord pointer hoverOpacity">
					Organists
				</Link>
				<Link
					to="/library/list/composers?sort=a-z"
					className="libraryListOptionsWord pointer hoverOpacity">
					Composers
				</Link>
			</div>
		</div>
	)
}
