import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Components

// State
import { setListLength } from '../../state/library';

const LoadMoreButton = () => {
	const dispatch = useDispatch();
	const { selectedList, listLength } = useSelector((state) => state.library);

	const loadMoreClick = () => {
		const newLength = listLength + 100;
		dispatch(setListLength(newLength));
	};

	return (
		<div>
			{listLength < selectedList.length ? (
				<button id="load-more" onClick={loadMoreClick}>
					Load More
				</button>
			) : null}
		</div>
	);
};

export default LoadMoreButton;
