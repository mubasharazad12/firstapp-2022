import React from "react";
import { useEffect } from "react";
import 
// f96712af

const API_URL = 'http://www.omdbapi.com/?apikey=f96712af';

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data);
    }

    useEffect(() => {
        searchMovies('Batman');
    }, []);

    return(
        <h1> App </h1>
    );

}

export default App;