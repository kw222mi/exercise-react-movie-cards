import "./MovieCard.css"

export interface IMovie {
  title:string,
  rating:number,
  genre:string,
  image:string;
  description:string
}

const MovieCard = (props:IMovie) => {

    const generateStars = (rating:number) => {
    // Create an array for the stars
    const stars = [];
    // Loop through the five stars
    for (let i = 0; i < 5; i++) {
      //Check if index is less then rate
      // if less fill star else leave empty
      if (i < rating) {
        stars.push(<span key={i} className="full ">&#9733;</span>);
      } else {
        stars.push(<span key={i} className="empty">&#9734;</span>);
      }
    }

    return stars;
  };

    return ( 
        <>
    <div className="movie-card">
      <div className="container">
        <img src={props.image} alt="cover" className="cover" />
        <div className="hero">      
        
    </div>
    <div className="description">
        <span className="tag">{props.genre}</span>
      <div className="title1">{props.title} </div>
      <div className="rating">
        {/* call generateStars and send the rating as parameter */}
        {generateStars(props.rating)}
      </div>       
        <p>{props.description}</p>       
    </div> 
  </div> 
</div> 
        </>
    );
}
 
export default MovieCard;