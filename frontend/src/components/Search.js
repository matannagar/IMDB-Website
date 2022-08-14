import React from 'react'
import { useContext } from "react";
import { MoviesContext } from "../movies-context";

const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="

function Search() {
    const [movies, setMovies, searchM, setSearchM, getMovies] = useContext(MoviesContext);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (searchM) {
            getMovies(SEARCH_API + searchM);
            setSearchM('');
        }
    };

    const handleOnChange = (e) => {
        setSearchM(e.target.value);
    }
    return (
        <header>
            <form onSubmit={handleOnSubmit}>
                <input className="search"
                    type="search"
                    value={searchM}
                    onChange={handleOnChange}
                    placeholder="search..." />

            </form>
        </header>
    )
}

export default Search
