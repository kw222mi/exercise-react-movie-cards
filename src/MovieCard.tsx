import "./MovieCard.css"



const MovieCard = (props) => {

    const generateStars = (rating) => {
    // Skapa en array för att lagra stjärnorna
    const stars = [];

    // Loopa igenom alla fem stjärnor
    for (let i = 0; i < 5; i++) {
      // Kolla om indexet är mindre än betyget
      // Om det är mindre, fyll i stjärnan, annars lämna den tom
      if (i < rating) {
        stars.push(<span key={i} className="full">&#9733;</span>);
      } else {
        stars.push(<span key={i} className="empty">&#9734;</span>);
      }
    }

    // Returnera stjärnorna
    return stars;
  };

    return ( 
        <>
        <div className="movie-card">
  
  <div className="container">
    
    <a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_cover.jpg" alt="cover" className="cover" /></a>
        
    <div className="hero">
            
      <div className="details">
      
        <div className="title1">{props.title} <span>PG-13</span></div>
   
        
         {/* Visa filmens betyg i form av stjärnor */}
      <div className="rating">
        {/* Anropa generateStars-funktionen och skicka in betyget som en parameter */}
        {generateStars(props.rating)}
      </div>
        
       
        
      </div> 
      
    </div>
    
    <div className="description">
      
      <div className="column1">
        <span className="tag">{props.genre}</span>
        <span className="tag">fantasy</span>
        <span className="tag">adventure</span>
      </div> 
      
      <div className="column2">
        
        <p>{props.description}</p>
         
        
        
      </div>
    </div> 
    
   
  </div> 
</div> 
        </>
    );
}
 
export default MovieCard;