import MovieCard from "./MovieCard";

const MovieList = (props) => {

    
    return ( 
        <>
        <div>
              
      {props.movieArray.map((movie) => {
        return (
         <MovieCard title={movie.title} rating={movie.rating} description={movie.description}  genre={movie.genre}/>
        );
      })}
        </div>
     
    
       
        </>
     );
}
 
export default MovieList;