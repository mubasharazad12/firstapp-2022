
import { Routes, BrowserRouter, Route, Link } from "react-router-dom";
import "./Assets/css/App.css"
import Home from "./Pages/Home";
import MovieLand from "./Pages/MovieLand";

// f96712af




const App = () => {
    return(
        <BrowserRouter>
        <div className="app">

           <Link to="/"> Home </Link>
            
            <div className="content"> 
            <Routes>

                <Route exact path="/movieland" element={<MovieLand />} />
                <Route exact path="/" element={<Home />} /> 

            </Routes>
            </div>
 
        </div>
       </BrowserRouter>
 
            
     );

}

export default App;