import React, { useState, useEffect } from "react";
import './index.css'
import { Movie } from "./components";

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="

export default function App(props) {
  const [movies, setMovies] = useState([]);
  const [searchM, setSearchM] = useState('');

  useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, [])

  const handleOnSubmit = (e) => {
    e.preventDefault();

    fetch(SEARCH_API + searchM)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });


  };

  const handleOnChange = (e) => {
    setSearchM(e.target.value);
  }
  return (
    <>
      <header>
        <form onSubmit={handleOnSubmit}>
          <input className="search"
            type="search"
            value={searchM}
            onChange={handleOnChange}
            placeholder="search..." />

        </form>
      </header>

      <div className="movie-container">

        {movies.length > 0 &&
          movies.map(movie => (
            <Movie
              key={movie.id}
              {...movie} />))
        }
      </div>
    </>
  );
}
