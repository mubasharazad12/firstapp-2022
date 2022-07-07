import { useState, useEffect } from "react";


const useFetch = (url) =>{


    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [movies, setMovies] = useState([]);
 



    useEffect(() => {
        

        // const abortCont = new AbortController();

        const searchMovies = async () => {
            try{
            const response = await fetch( url );
                if(!response.ok) {
                    throw Error("sadsadasdasdsada");
                }
            const data = await response.json();
            setMovies(data.Search);
            setLoading(false);
            console.log(data);
            } catch (err) {
                setError(err.message);
                
            }
        }
    
        const getJsonData = async () => {
            try{
            const response = await fetch(url); 
            if(!response.ok) {
                throw Error("json");
            }
    
            const data = await response.json();
            setData(data);
            setLoading(false);
         
          
            } catch (err) {
                setError(err.message);
            }
        }
        
        searchMovies(url);
        getJsonData(url);
     

    
        // return () => abortCont.abort();

    }, [url]);

    return {  data , loading , error , movies  }
    
}

export default useFetch;