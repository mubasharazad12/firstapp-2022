import { Link } from "react-router-dom";

const NotFound = () =>{

    return(
        <div className="not-found">
            <h1>404</h1>
            <h2>This page can't found!</h2>
            <Link to="/">Go To Home Page?</Link>

        </div>
    );
    
}
export default NotFound;