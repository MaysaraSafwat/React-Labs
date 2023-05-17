import {useState, useEffect} from "react";
import {Link} from "react-router-dom";

export default function Artists(){
    const [artists, setArtists] = useState([])

    useEffect(()=>{
        const fetchData =()=>{
            fetch("http://localhost:3500/artists")
            .then((response)=>{return response.json()})
            .then((data)=>{
                console.log(data)
                 setArtists(data)
            })
            .catch((err)=>{console.log(err)});
        }
        fetchData();
    },[])

    return(
        <div>
            <Link to="/" className="heading">Music DB</Link>
          <div className="artists-c">
            {artists.map(artist=>(
                <div className="artist-card">
                    <Link to={`/artists/${artist.id}`}>
                        <h2>
                            {artist.name}
                        </h2>
                        <img src={`./covers/${artist.cover}.jpg` } alt="cover"/>
                    </Link>
                     
                </div>
            ))}
        </div>
        </div>
        
    )
}