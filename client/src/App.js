import React,{Component} from 'react';
import Header from "./components/Header/Header"
import './App.scss';
import Spotify from 'spotify-web-api-js'
import FooterPlayer from "./components/FooterPlayer/FooterPlayer"
import Recommendations from './components/Recommendations/Recommendations';
const spotifyWebApi = new Spotify();

class App extends Component {
  constructor(){
    super();
    const params= this.getHashParams()
    this.state = {
      loggedIn: params.access_token ? true : false,
      nowPlaying: {
        title: "",
        image:''
      }
    }
    if(params.access_token){
      spotifyWebApi.setAccessToken(params.access_token) 
    }
  }
 
  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }
  getNowPlaying(){
    spotifyWebApi.getMyCurrentPlaybackState()
    .then((response) => {
      this.setState({
        nowPlaying: {
          // title: response.item.name,
          image:response.item.album.images[0].url,
        }
      })  
      console.log(response.item)
     
    }) 
  }
  render(){

  return (
    <div className="App">
      <a href="http://localhost:8888">
      <button className="spotify">
        <p>login with spotify</p>
        <img src="https://pbs.twimg.com/profile_images/560739405543907328/kOWO3V15.png" alt=""/>
      </button>
      </a>
      <Header/> 

      <Recommendations/>
      <FooterPlayer />
    </div>
  );
}
}

export default App;
