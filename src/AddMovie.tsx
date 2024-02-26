import "./AddMovie.css"

const AddMovie = () => {
    return ( 
        <div className="form-container">
            <form className="movie-form">
                <label>Title </label>
                <input type="text"></input>
                <label>Rating</label>
                <input type="range"></input>
                <label>Genrre</label>
                <select id="genres" name="genres">
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
                <textarea placeholder="Descripton"></textarea>
                <div className="button-container">
                <button className="clear-button">Clear</button>
                <button type="submit" className="add-button">Add</button>
                </div>
            </form>
        </div>
     );
}
 
export default AddMovie;