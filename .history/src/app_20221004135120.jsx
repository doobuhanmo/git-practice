
import { useEffect, useState } from 'react';
import './app.module.css';
import SearchHeader from './components/search-header/search-header';
import VideoList from './components/video-list/video-list';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(()=> {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.googleapis.com/youtube/v3/videos/?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDGBrIvbWKSu6Okhp_hN-ORO0cFgd_SvZo", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));

  },[]);
  return (
    <div className={style.app}>
      <SearchHeader />
      <VideoList videos={videos}/>
    </div>
    
  );
}

export default App;
