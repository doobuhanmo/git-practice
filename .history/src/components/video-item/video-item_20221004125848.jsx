import React from 'react';

const VideoItem = ({video : {snippet}} ) => 
    <li>    
        <img src={snippet.thumbnails.medium.url} alt=""  />
        <div>
            <p>{snippet.title}</p>
            <p>{snippet.chnnelTitle}</p>
        </div>
    
    </li>;
    


export default VideoItem;