import React from "react";
import './index.css'
import { Search, MoviesList } from "./components";
import { MoviesProvider } from "./movies-context";

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
