import React from 'react'

const MoviesCard = (props) => 
<>
  <h1>This is the MoviesCard component</h1>;
  <h2>{props.movie.title}</h2>
  <h4>{props.movie.description}</h4>
</>

export default MoviesCard;