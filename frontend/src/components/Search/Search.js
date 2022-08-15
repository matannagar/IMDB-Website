import React from 'react'
import { useContext } from "react";
import { MoviesContext } from "../../movies-context";

import './Search.css'

const SEARCH_API = "https://imdb-server-node.herokuapp.com/getsearch/?movie="

export function Search() {
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
