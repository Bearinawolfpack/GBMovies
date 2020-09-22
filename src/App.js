import React from 'react';
import './App.css';

import Header from './Components/AppComponents/Header';
import MoviesDisplay from './Components/MovieComponents/MoviesDisplay';

const App = () => (
	<>
		<Header />
		<h1>Hello World</h1>
		<MoviesDisplay />
	</>
);

export default App;
