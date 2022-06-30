import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css"
import SearchIcon from "./search.svg"
import Movies  from "./Movies";
// f96712af

const API_URL = 'http://www.omdbapi.com/?apikey=f96712af';



const App = () => {

    const [movies, setMovies] = useState([]);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('Batman');
    }, []);

    return(
       <div className="app">
            <h1>Movie Land</h1>

            <div className="search">
                <input 
                    placeholder="Search for movies" 
                    value="Batman"
                    onChange={() => {}}
                />
                <img
                    src={SearchIcon}
                    alt="Search icon"
                    onClick={() => {}}
                />
            </div>

            {
                (() => {
                    if(movies.length > 0 ) {
                        return (  
                          <div className="container"> 
                            {movies.map((movie)=> (
                                <Movies movie={movie} />
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

export default App;