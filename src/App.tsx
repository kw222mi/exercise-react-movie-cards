import { useState, useEffect } from "react";
import AddMovie from "./AddMovie";
import MovieList from "./MovieList";
import { IMovie } from "./MovieCard";


export function App() {

  const[movieArray, setMovieArray] = useState ([])


  // https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_cover.jpg

const addMovie = (addMovieDetails:IMovie) => {
  console.log(addMovieDetails);
  setMovieArray((prevMovieArray) => [...prevMovieArray, addMovieDetails]);
};

    // Effektfunktion som körs när movieArray ändras och sparar till localStorage
  useEffect(() => {
  // Kolla om arrayen är tom eller inte innan du sparar till local storage
  if (movieArray.length > 0) {
    const movieArrayJson = JSON.stringify(movieArray);
    localStorage.setItem("movieArray", movieArrayJson);
  }
}, [movieArray]); // Använd movieArray som beroende så att useEffect bara körs när den ändras

  // Effektfunktion som körs vid komponentens montering för att hämta från localStorage
  useEffect(() => {
    // Hämta JSON-strängen från localStorage
    const movieArrayJson = localStorage.getItem("movieArray");
    // Konvertera JSON-strängen till array och uppdatera state
    if (movieArrayJson) {
      const savedMovieArray = JSON.parse(movieArrayJson);
      setMovieArray(savedMovieArray);
    }
  }, []);
  return (
    <>
      <MovieList movieArray={movieArray} />
      <AddMovie addMovie={addMovie}/>
    </>
  );
}




