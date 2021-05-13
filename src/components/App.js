import { useEffect } from 'react';
import Navbar from './Navbar';
import { useSelector, useDispatch } from 'react-redux';
import Player from './Player';
import Routes from './Routes';

// State
import { getLibrary, setListLength, setList } from './../state/library';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getLibrary());
	});

	return (
		<div className="App">
			<Navbar />
			<Routes />
			<Player />
		</div>
	);
}

export default App;
