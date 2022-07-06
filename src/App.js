
import { Routes, BrowserRouter, Route } from "react-router-dom";
import "./Assets/css/App.css"
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