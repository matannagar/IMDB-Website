import React from 'react'
import Movie from './Movie';
import { useContext } from "react";
import { MoviesContext } from "../movies-context";

function MoviesList() {
  const [movies, setMovies, searchM, setSearchM, getMovies] = useContext(MoviesContext);

  return (
    <div className="movie-container">
      {movies.length > 0 &&
        movies.map(movie => (
          <Movie
            key={movie.id}
            {...movie} />))
      }
    </div>
  )
}

export default MoviesList
