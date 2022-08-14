import React, { useState, useEffect, createContext } from 'react';

export const MoviesContext = createContext({});

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
export const MoviesProvider = props => {
    const [movies, setMovies] = useState([]);
    const [searchM, setSearchM] = useState('');


    const getMovies = (API) => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setMovies(data.results);
            });
    }

    useEffect(() => {
        getMovies(FEATURED_API);
    }, [])

    return (
        <MoviesContext.Provider value={[movies, setMovies, searchM, setSearchM, getMovies]}>
            {props.children}
        </MoviesContext.Provider>
    )
}
