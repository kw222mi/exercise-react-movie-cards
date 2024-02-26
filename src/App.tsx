import { useState } from "react";
import AddMovie from "./AddMovie";

import MovieList from "./MovieList";

export function App() {

  const[movieArray, setMovieArray] = useState ([])
  const [movie, setMovie] = useState ("")

   const addMovie = (addMovieDetails) => {
     console.log("This is app")
    console.log(addMovieDetails);
    setMovie(addMovieDetails)
    setMovieArray(movieArray => [...movieArray, movie])
    
  }
  return (
    <>
      <MovieList movieArray={movieArray} />
      <AddMovie addMovie={addMovie}/>
    </>
  );
}
