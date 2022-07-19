import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const usePost = (url,data) => {


    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
   
        try {

            const response = await fetch(   
                url,{ 
                    method: 'POST', 
                    headers: { 'Content-Type' : 'application/json' } , 
                    body: JSON.stringify(data) 
                });
        
            if(!response.ok) {
                throw Error("API Error");
            }
            setLoading(false);
            navigate('/todoapp')
            
        } catch (error) {
            setError(error.message);
        }

 
    }

    return { handleSubmit , error , loading}

}

export default usePost;