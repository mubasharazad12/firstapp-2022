import { useParams } from "react-router-dom";

const MovieDetails = () => {

    const { imdbID } = useParams();

    return(
        <div className="movie-details">
            <h1> details - {imdbID}</h1>
        </div>
    );
}

export default MovieDetails;