import React,{ useState,useEffect } from 'react';
import Spotify from 'spotify-web-api-js';
const spotifyWebApi = new Spotify();




const Recommendations = () => {
    const [track, setTrack] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await spotifyWebApi.getMySavedTracks()
            setTrack(response.items)
            console.log(response.items)
           
            
        };
       
        
        fetchData()
    }, []
    );
    // console.log(track)


    return (
        <div className="liked-song-info">
            <h3>Liked songs</h3>
             { track.map(song => (
            <div className="recomendations-container" key={song.track.id}>
                <img src={`${song.track.album.images[0].url}`} alt=""/>
                <p>{song.track.name}</p>
            </div>
        ))
              }      
        </div>
    )
}

export default Recommendations
