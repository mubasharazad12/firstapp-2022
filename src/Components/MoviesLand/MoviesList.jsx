import { Link } from "react-router-dom";
const MoviesList = ({ movies }) => {

    return (
        <>
        {movies.map((movie) => (

        <div className="movie"   key={movie.imdbID} >
                    <Link to={`/moviedetails/${movie.imdbID}`}>
                    <div>
                        <p>{movie.Year}</p>
                    </div>
                    <div>
                        <img src={ movie.Poster !== 'N/A' ? movie.Poster : "https://via.placeholder.com/400"} alt={movie.Title} />
                    </div>
                    <div>
                        <span>  {movie.Type} </span>
                        <h3> {movie.Title}</h3>
                    </div>
                     </Link>
                    
        </div>
        
        ))}
        </>
    );

}

export default MoviesList;