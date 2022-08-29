import { Link } from "react-router-dom"

const ComposerItem = ({ val }) => {
	return (
		<Link
			to={`/library/composers/${val.id}`}
			className="list-link"
			key={val.id}>
			<div className="list-container">
				<p className="library-item no-pic-text">{val.name}</p>
			</div>
		</Link>
	)
}

export default ComposerItem
