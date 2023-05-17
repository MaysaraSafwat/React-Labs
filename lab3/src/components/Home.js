import {Link} from 'react-router-dom';

export default function Home(){

    return(
        <div className="home-c">
            <Link to="/artists">
              <h1>Music DB</h1>
            </Link>
        </div>
    )
}