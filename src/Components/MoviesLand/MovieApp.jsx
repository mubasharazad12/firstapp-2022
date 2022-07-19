import { useState } from "react";
import "../../Assets/css/MovieLand.css"
import SearchIcon from "../../Assets/svg/search.svg"
import useFetch from "../../Hooks/useFetch";
import MoviesList  from "./MoviesList";
// f96712af

const API_URL = 'http://www.omdbapi.com/?apikey=f96712af&s=';
 


const MovieApp = () => {

    const [searchTerm, setSearchTerm] = useState('Movie');
    const [title, setTtitle] = useState('');
    const { movies, error, loading} = useFetch(API_URL + searchTerm );
   


    return(
        
       <div className="MovieLand">
            { loading && <h1 className="movie-h1"> loading..... </h1>}
            { error && <div> {alert(error)} </div>}
            <h1 className="movie-h1">Movie Land</h1>

            <div className="search">
                <input 
                    placeholder="Search for movies" 
                    value={title}
                    onChange={(e) => setTtitle(e.target.value)}
                />
               

            
                <img
                    src={SearchIcon}
                    alt="Search icon"
                    onClick={() => setSearchTerm(title)}
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