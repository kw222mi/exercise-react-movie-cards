import MovieCard from "./MovieCard";
import { IMovie } from "./MovieCard";
import "./movieList.css"

interface IMovieListProps {
  movieArray:IMovie[]
}

const MovieList = (props:IMovieListProps) => {
    return ( 
        <>
          <div className="movie-list-container"> 
            {props.movieArray.map((movie:IMovie) => {
              return (
              <MovieCard title={movie.title} rating={movie.rating} description={movie.description}  genre={movie.genre} image={movie.image}/>
              );
            })}
          </div>
        </>
     );
}
 
export default MovieList;