import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Components
import LibraryListItem from './LibraryListItem';
import LoadMoreButton from './LoadMoreButton';

const LibraryList = () => {
	const dispatch = useDispatch();
	const { selectedList, listLength } = useSelector((state) => state.library);

	return (
		<div id="library-list">
			{Array.isArray(selectedList)
				? selectedList.slice(0, listLength + 1).map((val, index) => {
						return <LibraryListItem val={val} key={index} />;
				  })
				: null}
			<LoadMoreButton />
		</div>
	);
};

export default LibraryList;
