import React from 'react';
import VideoItem from '../video-item/video-item';

const VideoList = (props) => (
    <ul>
        {props.videos.map(video => (
            <VideoItem video={video} />
        ))}
    </ul>
    );

export default VideoList;