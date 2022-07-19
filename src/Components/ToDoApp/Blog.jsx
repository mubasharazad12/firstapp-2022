import BlogList from "./BlogList";
import useFetch from "../../Hooks/useFetch";
import '../../Assets/css/todo.css'
import Loading from "../Loading";
import { Link } from "react-router-dom";

const Blog = () => {

    const { data : blogs, loading, error } = useFetch("http://localhost:8000/users")
   
    return (

        <div className="blog content">
            <button className="add-button">
                <Link to="/todoapp/create">   Add Blog </Link> 
            </button>
            { error && <div> {error} </div>}
            { loading &&  <Loading />}
            { blogs && <BlogList blogs={blogs} /> }

        </div> 
        
      
        
    );

}

export default Blog;