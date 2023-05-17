import { useParams , Link} from "react-router-dom"
import {useState, useEffect} from "react";

export default function ArtistDetails(){
    const {id} = useParams();
  const [artist, setArtist] =useState([])
  const[albums, setAlbums] = useState([]);
   
    useEffect(()=>{
        const getArtist =()=>{
           
            fetch(`http://localhost:3500/artists/${id}`)
            .then((response)=>{return response.json()})
            .then((data)=>{
                console.log(data)
                setArtist(data)
                setAlbums(data.albums)
            })
            .catch((err)=>{console.log(err)});
        }
        getArtist();
    },[id])

    return(
        <div>
           <Link to="/" className="heading">Music DB</Link>

          { artist && (
              <div className="artist-c">
              <h1>{artist.name}</h1>
              <img src={`./covers/${artist.cover}.jpg`} alt="cover"/>
              <p>{artist.bio}</p>

              {albums && (
                  <div class="albums">
                  {albums.map(a=>(
                   <div key={a.albumId}>
                       <h3>{a.title}</h3>
                       <img src={`./albums/${a.cover}.jpg`} alt="cover"/>
                       <p>Year: {a.year}</p>
                   </div>
                  ))}
               </div>
              )}

          </div>
          )}

            
        </div>
    )
}