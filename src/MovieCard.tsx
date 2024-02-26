import "./MovieCard.css"

const MovieCard = () => {
    return ( 
        <>
        <div className="movie-card">
  
  <div className="container">
    
    <a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_cover.jpg" alt="cover" className="cover" /></a>
        
    <div className="hero">
            
      <div className="details">
      
        <div className="title1">The Hobbit <span>PG-13</span></div>

        <div className="title2">The Battle of the Five Armies</div>    
        
        <fieldset className="rating">
    <input type="radio" id="star5" name="rating" value="5" /><label className = "full" htmlFor="star5" title="Awesome - 5 stars"></label>
    <input type="radio" id="star4half" name="rating" value="4 and a half" /><label className="half" htmlFor="star4half" title="Pretty good - 4.5 stars"></label>
    <input type="radio" id="star4" name="rating" value="4" checked /><label className = "full" htmlFor="star4" title="Pretty good - 4 stars"></label>
    <input type="radio" id="star3half" name="rating" value="3 and a half" /><label className="half" htmlFor="star3half" title="Meh - 3.5 stars"></label>
    <input type="radio" id="star3" name="rating" value="3" /><label className = "full" htmlFor="star3" title="Meh - 3 stars"></label>
    <input type="radio" id="star2half" name="rating" value="2 and a half" /><label className="half" htmlFor="star2half" title="Kinda bad - 2.5 stars"></label>
    <input type="radio" id="star2" name="rating" value="2" /><label className = "full" htmlFor="star2" title="Kinda bad - 2 stars"></label>
    <input type="radio" id="star1half" name="rating" value="1 and a half" /><label className="half" htmlFor="star1half" title="Meh - 1.5 stars"></label>
    <input type="radio" id="star1" name="rating" value="1" /><label className = "full" htmlFor="star1" title="Sucks big time - 1 star"></label>
    <input type="radio" id="starhalf" name="rating" value="half" /><label className="half" htmlFor="starhalf" title="Sucks big time - 0.5 stars"></label>
  </fieldset>
        
        <span className="likes">109 likes</span>
        
      </div> 
      
    </div>
    
    <div className="description">
      
      <div className="column1">
        <span className="tag">action</span>
        <span className="tag">fantasy</span>
        <span className="tag">adventure</span>
      </div> 
      
      <div className="column2">
        
        <p>Bilbo Baggins is swept into a quest to reclaim the lost Dwarf Kingdom of Erebor from the fearsome dragon Smaug. Approached out of the blue by the wizard Gandalf the Grey, Bilbo finds himself joining a company of thirteen dwarves led by the legendary warrior, Thorin Oakenshield. Their journey will take them into the Wild; through... <a href="#">read more</a></p>
         
        
        
      </div>
    </div> 
    
   
  </div> 
</div> 
        </>
    );
}
 
export default MovieCard;