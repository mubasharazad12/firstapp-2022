
import { Routes, BrowserRouter, Route, Link } from "react-router-dom";
import "./Assets/css/App.css"
import Home from "./Pages/Home";
import MovieLand from "./Pages/MovieLand";
import TodoHome from "./Pages/TodoHome";

// f96712af




const App = () => {
    return(
        <BrowserRouter>
        <div className="app">

           <Link to="/"> Home </Link>
            
            <div className=""> 
            <Routes>

                <Route exact path="/movieland" element={<MovieLand />} />
                <Route exact path="/" element={<Home />} /> 
                <Route exact path="/todoapp" element={<TodoHome />} /> 

            </Routes>
            </div>
 
        </div>
       </BrowserRouter>
 
            
     );

}

export default App;