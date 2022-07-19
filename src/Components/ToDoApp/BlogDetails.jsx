import { useParams } from "react-router-dom";
import useDelete from "../../Hooks/useDelete";
import useFetch from "../../Hooks/useFetch";
import Loading from "../Loading";


const BlogDetails = () =>{

    const {id} = useParams();
    const {data: blog, loading, error} = useFetch('http://localhost:8000/users/' + id)
    const { hanndleClick, errorDelete, loadingDelete } = useDelete("http://localhost:8000/users/" + id)

    return (

        <div className="blog-details content">
            {loading && <div> <Loading /></div>}
            {error && <div>{error}</div> }
            {errorDelete && <div>{errorDelete}</div> }
            {blog && 
                <article>
                        <h2>{blog.name}</h2>
                        <p>{blog.work}</p>
                        <p>{blog.email}</p>
                        <p>{blog.dob}</p>
                        <p>{blog.city}</p>
                        { !loadingDelete && <button onClick={hanndleClick}> Delete </button> }
                        { loadingDelete && <button disabled> Deleting ..... </button> }
                
                </article>
            }

        </div>
        
    );
}

export default BlogDetails;