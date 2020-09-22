import React from 'react';
import { Link } from 'react-router-dom';

const MoviesCard = (props) => (
	<>
		<Link to={`/${props.movie.id}`}>
			<h2>{props.movie.title}</h2>
		</Link>
		<h4>{props.movie.description}</h4>
	</>
);

export default MoviesCard;
