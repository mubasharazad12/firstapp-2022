import { Link } from "react-router-dom";

const BlogList = ({blogs}) => {

    return(
        <div className="blog-list">

            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/todoapp/blogdetails/${blog.id}`}>
                        <h2>{blog.name}</h2>
                        <p>{blog.work}</p>
                        <p>{blog.email}</p>
                        <p>{blog.dob}</p>
                        <p>{blog.city}</p>
                  
                    </Link>
                        
                </div>
                 
                        

            ))}
            
    

        </div>
    );

}

export default BlogList;