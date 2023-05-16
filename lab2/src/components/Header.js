import { Link } from "react-router-dom";

export default function Header(){

    return(
        <div>
           <nav className="navbar">
             <h2>Day2</h2>
             <div className="nav-links">
                 <Link to="">Home</Link>
                <Link to="details/1">Details</Link>
                <Link to="profile">Profile</Link> 
                <Link to="*">Error</Link> 
             </div>
           </nav>
        </div>
    )
}