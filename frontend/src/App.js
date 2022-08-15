import React from "react";
import './index.css'
import { MoviesProvider } from "./movies-context";

import { Search } from "./components/Search";
import { MoviesList } from "./components/MoviesList";


export default function App(props) {
  return (
    <>
      <MoviesProvider>
        <Search />
        <MoviesList />
      </MoviesProvider>
    </>
  );
}
