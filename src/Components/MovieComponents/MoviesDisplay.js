import React from 'react';
import MovieCard from './MovieCard';

const MovieList = [
  {
    title: 'Movie 1',
    description: "First of it's kind",
    id: 1,
  },
  {
    title: 'Movie 2',
    description: "Second of it's kind",
    id: 2,
  },
  {
    title: 'Movie 3',
    description: "Third of it's kind",
    id: 3,
  },
];

const MoviesDisplay = () => {
  const DisplayMovies = MovieList.map((movie) => (
    <MovieCard movie={movie} key={movie.id} />
  ));
  return <>{DisplayMovies}</>;
};

export default MoviesDisplay;
export { MovieList };
