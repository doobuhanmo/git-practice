import React from 'react';

const VideoItem = (props) => 
    <li>    
        <img src={props.video.snippet.thumbnails.medium.url} alt=""  />
        <div>
            <p>{props.video.snippet.title}</p>
            <p>{props.video.snippet.chnnelTitle}</p>
        </div>
    
    </li>;
    


export default VideoItem;