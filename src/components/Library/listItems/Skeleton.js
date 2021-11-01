const Skeleton = ({ id }) => {
	return (
		<div className="list-link" key={id}>
			<div className="list-container">
				<div className="pics skeleton" alt="skeleton"></div>
				<div className="list-content-container">
					<p className="library-item skeleton skeleton-text"></p>
					<p className="library-item skeleton skeleton-text"></p>
					<p className="library-item skeleton skeleton-text"></p>
				</div>
			</div>
		</div>
	)
}

export default Skeleton
