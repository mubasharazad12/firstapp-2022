
const BlogList = ({blogs}) => {

    return(
        <div className="blog-list">

            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    
                        <p>{blog.name}</p>
                        <p>{blog.work}</p>
                        <p>{blog.email}</p>
                        <p>{blog.dob}</p>
                        <p>{blog.address}</p>
                        <p>{blog.city}</p>
                        <p>{blog.optedin}</p>
                </div>
                        

            ))}
            
    

        </div>
    );

}

export default BlogList;