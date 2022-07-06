import {Link} from 'react-router-dom';

const Home = () => {

    return(
        <div className="Home">
            <h1>Apps</h1>
            <nav>
                <div className='home-links'>
                    <Link to="/movieland"> Movie Land App</Link>  
                    <Link to="/todoapp">  ToDo App </Link>  
                    
                </div>
            </nav>
        </div>
    );

}
export default Home;