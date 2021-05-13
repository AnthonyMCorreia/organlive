import React from 'react';

// Components
import Search from './Search';
import LibraryList from './LibraryList';

const Library = () => {
	return (
		<div id="library">
			<Search />
			<LibraryList />
		</div>
	);
};

export default Library;
