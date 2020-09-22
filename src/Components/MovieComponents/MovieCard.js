import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MoviesCard = ({ movie }) => (
  <>
    <Link to={`/${movie.id}`}>
      <h2>{movie.title}</h2>
    </Link>
    <h4>{movie.description}</h4>
  </>
);

export default MoviesCard;

MoviesCard.defaultProps = {
  movie: {
    description: 'Description Not Available',
  },
};

MoviesCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    id: PropTypes.number.isRequired,
  }),
};
