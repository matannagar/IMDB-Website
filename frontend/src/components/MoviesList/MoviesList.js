import React from 'react'
import { Movie } from '../Movie';
import { useContext } from "react";
import { MoviesContext } from "../../movies-context";

import './MoviesList.css'

export function MoviesList() {
  const [movies] = useContext(MoviesContext);
  const slicedArray = movies.slice(0, 10);

  return (
    <div className="movie-container">
      {movies.length > 0 &&
        slicedArray.map(movie => (
          <Movie
            key={movie.id}
            {...movie} />))
      }
    </div>
  )
}

