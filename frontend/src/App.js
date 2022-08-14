import React, { useState, useEffect } from "react";
import './index.css'
import { Movie, Search } from "./components";
import MoviesList from "./components/MoviesList";
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
