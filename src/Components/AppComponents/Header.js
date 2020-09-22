import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Header = () => (
	<div>
		<Router>
			<Link to="/">Header</Link>
		</Router>
	</div>
);

export default Header;
