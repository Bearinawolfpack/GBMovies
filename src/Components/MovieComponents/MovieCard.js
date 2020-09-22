import React from 'react'

const MoviesCard = (props) => 
<>
  <h2>{props.movie.title}</h2>
  <h4>{props.movie.description}</h4>
</>

export default MoviesCard;