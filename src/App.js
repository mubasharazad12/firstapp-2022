
import { Routes, BrowserRouter, Route } from "react-router-dom";
import "./Assets/css/App.css"
import MovieDetails from "./Components/MoviesLand/MovieDetails";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import MovieLand from "./Pages/MovieLand";
import TodoHome from "./Pages/TodoHome";

// f96712af




const App = () => {
    return(
        <BrowserRouter>
        <div className="app">

            <NavBar />
            
            <div className=""> 
            <Routes>

               
                <Route exact path="/" element={<Home />} /> 
                <Route exact path="/todoapp" element={<TodoHome />} /> 
                <Route exact path="/movieland" element={<MovieLand />} />
                <Route exact path="/moviedetails/:imdbID" element={<MovieDetails />} />


            </Routes>
            </div>
 
        </div>
       </BrowserRouter>
 
            
     );

}

export default App;