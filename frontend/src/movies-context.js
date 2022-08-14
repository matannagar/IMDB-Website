import React, { useState, useEffect, createContext } from 'react';

export const MoviesContext = createContext({});

const FEATURED_API = "https://imdb-server-node.herokuapp.com/getfeatured";

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
