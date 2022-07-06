import {Link} from 'react-router-dom';

const Home = () => {

    return(
        <div className="Home">
            <h1>Apps</h1>
            <nav>
                <div className='home-links'>
                    <Link to="/movieland"> Movie Land </Link>  
                    
                </div>
            </nav>
        </div>
    );

}
export default Home;