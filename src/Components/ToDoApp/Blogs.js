import BlogList from "./BlogList";
import { useState } from "react";
import { useEffect } from "react";
import '../../Assets/css/todo.css'

const Blogs = () => {

    const [blogs, setBlogs] = useState(null);

    useEffect(() => {

        fetch('http://localhost:8000/users')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(data);
                setBlogs(data);
            })

    }, []);
    
    return (
        <div className="blog">

           { blogs && <BlogList blogs={blogs} /> }
        </div>
        
      
        
    );

}

export default Blogs;