
import { useEffect, useState } from 'react';
import './app.css';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(()=> {
    console.log('use effect');

  },[]);
  return (
    <h1>hello</h1>
  );
}

export default App;
