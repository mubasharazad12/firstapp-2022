import { useState } from "react";
import { useEffect } from "react";
import "../../Assets/css/MovieLand.css"
import SearchIcon from "../../Assets/svg/search.svg"
import MoviesList  from "./MoviesList";
// f96712af

const API_URL = 'http://www.omdbapi.com/?apikey=f96712af';



const MovieApp = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('Movie');
    }, []);

    return(
        
       <div className="MovieLand">
            <h1>Movie Land</h1>

            <div className="search">
                <input 
                    placeholder="Search for movies" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="Search icon"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {
                (() => {
                    if(movies.length > 0 ) {
                        return (  
                          <div className="container"> 
                            {movies.map((movie)=> (
                                <MoviesList movie={movie} />
                            ) )}
                          </div>
                        ) 
                      } else {
                          return (
                            <div className="empty"> 
                                <h2>No Movies Found</h2>
                             </div>
                          )
                      }
                }) () 
            }

            {/*           
                { ( () => { if(condition) 
                    { 
                        return ( 
                            <div/> 
                        )
                    }
                     else { 
                        return(
                            <div/>  
                        )
                  
                    } 
                }) ()

                } */}
         

       </div>

           
    );

}

export default MovieApp;