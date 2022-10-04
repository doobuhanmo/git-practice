import React from 'react';
import styles from './video-item.module.css'

const VideoItem = ({video : {snippet}} ) => 
    <li className={styles.video}>    
        <img className={styles.thumbnails} src={snippet.thumbnails.medium.url} alt=""  />
        <div>
            <p classaAme={styles.title}>{snippet.title}</p>
            <p className={styles.channel}>{snippet.channelTitle}</p>
        </div>
    
    </li>;
    


export default VideoItem;