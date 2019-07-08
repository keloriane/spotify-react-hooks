import React,{useState,useEffect} from 'react'
import Spotify from 'spotify-web-api-js';

const spotifyWebApi = new Spotify()


const FooterPlayer = () => {
    
    const [image, setImage] = useState()
    const [artist, setArtist] = useState('')
    const [title, setTitle] = useState('')
    useEffect(() => {

        const fetchPlayback  = async() =>{
            await spotifyWebApi.getMyCurrentPlaybackState()
            .then((res) => {
                setImage(res.item.album.images[0].url)
                setArtist(res.item.album.artists[0].name)
                setTitle(res.item.name)
                // const image = () => setImage(res.item.album.image[0].url)
                // setCurrentImg(currentImg(response.item.name));
                // setState({ currentImg:response.item.name })
               console.log(res)

            })   
            
        }
        
        fetchPlayback()
    },[]
    )
      
    return (
        <div className="footer-player">
            <div className="song-info">
            <div className="album-image">
                <img src={`${image}`} alt={title}/> 
            </div>
            <div className="song-information">
                <p>{artist}: </p>
                <p> {title}</p> 
             
            </div>
            </div>
       
        </div>
    )
}

export default FooterPlayer
