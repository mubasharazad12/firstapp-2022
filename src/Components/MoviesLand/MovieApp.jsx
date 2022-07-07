import { useState } from "react";
import "../../Assets/css/MovieLand.css"
import SearchIcon from "../../Assets/svg/search.svg"
import useFetch from "../../Hooks/useFetch";
import MoviesList  from "./MoviesList";
// f96712af

const API_URL = 'http://www.omdbapi.com/?apikey=f96712af&s=Movie';
 


const MovieApp = () => {

    
    const { movies,  searchMovies, error} = useFetch(API_URL);
 
    const [searchTerm, setSearchTerm] = useState('');

    return(
        
       <div className="MovieLand">
           { error && <div> {alert(error)} </div>}
            <h1 className="movie-h1">Movie Land</h1>

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
                        
                                <MoviesList movies={movies} />
                          
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