import { useState } from "react";
import { useNavigate } from "react-router-dom";


const useDelete = (url) => {


    const [errorDelete, setError] = useState(null);
    const [loadingDelete, setLoading] = useState(false);
    const navigate = useNavigate();

    const hanndleClick = async () =>{
        setLoading(true);
        try{
            const response = await fetch ( url, 
            {
                method: "DELETE",

            });
            
            if(!response.ok) {
                throw Error("API Error");
            }
            navigate('/todoapp');
            setLoading(false);

        } catch(error) {
            setError(error.message);
        }

    }
   return { hanndleClick , errorDelete, loadingDelete }

}

export default useDelete;