import { ChangeEvent, FormEventHandler, useState } from "react";
import "./AddMovie.css"

const AddMovie = (props) => {
    const [title, setTitle ] = useState ("")
    const [rating, setRating] = useState ("")
    const [genre, setGenre] = useState ("")
    const [description, setDescription] = useState ("")

    function handleTitle(event: ChangeEvent<HTMLInputElement>): void {
        console.log(event.target.value)
        setTitle(event.target.value)
    }

    function handleRating(event: ChangeEvent<HTMLInputElement>): void {
        console.log(event.target.value)
        setRating(event.target.value)
    }

      function handleGenre(event: ChangeEvent<HTMLSelectElement>): void {
         console.log(event.target.value)
         setGenre(event.target.value)
    }

    function handleDescription(event: ChangeEvent<HTMLTextAreaElement>): void {
         console.log(event.target.value)
         setDescription(event.target.value)
    }

     const handleOnSubmit: FormEventHandler<HTMLFormElement> = (e) => {
         e.preventDefault();
         console.log( addMovieDetails)
         props.addMovie(addMovieDetails)
    }

    const addMovieDetails = {
      title,
      rating,
      genre,
      description,
    };

  
     

    return ( 
        <>
        <div className="form-container">
            <form className="movie-form"  onSubmit={handleOnSubmit}>

                <label>Title </label>
                <input type="text" id="title" value={title} onChange= {handleTitle} ></input>

                <label>Rating</label>
                <input type="range" id="rating" value= {rating} onChange={handleRating} min="1" max="5"></input>


                <label>Genrre</label>
                <select id="genres" name="genres" value={genre} onChange={handleGenre}>
                    <option value="action">Action</option>
                    <option value="animation">Animation</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="documentary">Documentary</option>
                    <option value="drama">Drama</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="horror">Horror</option>
                    <option value="Science fiction">Science fiction</option>
                </select>
                
                <label>Description</label>
                <textarea placeholder="Descripton" value={description} onChange= {handleDescription}></textarea>
                
                <div className="button-container">
                    <button className="clear-button">Clear</button>
                    <button type="submit" className="add-button">Add</button>
                </div>
            </form>
        </div>
        </>
     );
}
 
export default AddMovie;