
import { Routes, BrowserRouter, Route } from "react-router-dom";
import "./Assets/css/App.css"
import MovieDetails from "./Components/MoviesLand/MovieDetails";
import BlogDetails from "./Components/ToDoApp/BlogDetails";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import MovieLand from "./Pages/MovieLand";
import TodoHome from "./Pages/TodoHome";
import CreateBlog from "./Components/ToDoApp/CreateBlog";
import NotFound from "./Pages/NotFound";

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
                <Route exact path="/todoapp/blogdetails/:id" element={<BlogDetails />} />
                <Route exact path="/todoapp/create" element={<CreateBlog />} />
                <Route path="*" element={<NotFound />} />

            </Routes>
            </div>
 
        </div>
       </BrowserRouter>
 
            
     );

}

export default App;