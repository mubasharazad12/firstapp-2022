import { useState, useEffect } from "react";


const useFetch = (url) =>{


    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    
    const [movies, setMovies] = useState([]);
 



    useEffect(() => {

        const searchMovies = async (title) => {
            const response = await fetch( url + `&s=${title}`);
            
            const data = await response.json();
            setMovies(data.Search);
            console.log(data.Search);
        }
    
        const getJsonData = async () => {
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
            setLoading(false);
            setError("asd");
        }

        getJsonData(url);
        searchMovies("Movie");

        // fetch(url)
        //     .then((response) => {
        //         if(!response.ok){
        //             throw Error("Fetch Error Message")
        //         }
        //         return response.json()
        //     })
        //     .then((data) => {
        //         console.log(data);
        //         setData(data);
        //         setLoading(false);
        //     })
        //     .catch(err => {
        //         setLoading(false);
        //         setError(err.message);
        //     })

    }, [url]);

    return {  data , loading , error , movies }
    
}

export default useFetch;