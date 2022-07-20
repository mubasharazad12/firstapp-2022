import BlogList from "./BlogList";
import useFetch from "../../Hooks/useFetch";
import '../../Assets/css/todo.css'
import Loading from "../Loading";
import { Link } from "react-router-dom";
import React from 'react';
import { useState } from "react";


const Blog = () => {

 

    const { data : blogs, loading, error } = useFetch("http://localhost:8000/users")

    const [count, setCount] = useState([]);



    return (

        

        <div className="blog content">

            <input
                    type="button"
                    value="Add clone"
                    onClick={(e) =>setCount(count + 1)}
                />

            <button className="add-button">
                <Link to="/todoapp/create">   Add Blog </Link> 
            </button>
            { error && <div> {error} </div>}
            { loading &&  <Loading />}
            { blogs && <BlogList blogs={blogs} /> }


                    

       
                    {Array.from(count).map((key, index) => (
                                
                                <div key={index}>

                        { blogs && <BlogList blogs={blogs} /> }
                                </div>
                    ))}



        </div> 
        
      
        
    );

}

export default Blog;