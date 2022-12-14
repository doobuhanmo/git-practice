import React from 'react';
import VideoItem from '../video-item/video-item';

const VideoList = (props) => (
    <ul className={styles.video}>
        {props.videos.map(video => (
            <VideoItem key={video.id} video={video} />
        ))}
    </ul>
    );

export default VideoList;