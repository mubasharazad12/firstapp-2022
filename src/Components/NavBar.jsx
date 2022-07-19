import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <nav className="navbar">
          <h1>All React Apps In One Project</h1>
          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/movieland" >MovieLand</Link>
            <Link to="/todoapp" >ToDoApp</Link>
          </div>
        </nav>
      );

}

export default NavBar;