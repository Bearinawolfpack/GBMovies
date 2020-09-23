import React from 'react';
import MovieCard from './MovieCard';

const MovieList = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB}&language=en-US&sort_by=popularity.asc&certification_country=us&include_adult=false&include_video=false&page=1&vote_count.gte=20`;

class MoviesDisplay extends React.Component {
  state = {
    stateMovies: [],
  };

  async componentDidMount() {
    try {
      const result = await fetch(MovieList);
      const movies = await result.json();
      this.setState({ stateMovies: movies.results });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const displayMovies = this.state.stateMovies.map((movie) => (
      <MovieCard movie={movie} key={movie.id} />
    ));
    return (
		<>
		{displayMovies}
		</>
		);
  }
}

export default MoviesDisplay;
