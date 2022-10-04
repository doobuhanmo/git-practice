import React from 'react';
import styles from './video-item.module.css'

const VideoItem = ({video : {snippet}} ) => 
    <li classNAme={styles.video}>    
        <img classNAme={styles.thumbnails} src={snippet.thumbnails.medium.url} alt=""  />
        <div>
            <p classNAme={styles.title}>{snippet.title}</p>
            <p classNAme={styles.channel}>{snippet.channelTitle}</p>
        </div>
    
    </li>;
    


export default VideoItem;