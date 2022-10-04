
import { useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search-header/search-header';
import VideoList from './components/video-list/video-list';

function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const search = query => {
    youtube.search(query)
    .then(console.log);

  }

  useEffect(()=> {
    youtube.mostPopular();

  },[]);
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search}/>
      <VideoList videos={videos}/>
    </div>
    
  );
}

export default App;
