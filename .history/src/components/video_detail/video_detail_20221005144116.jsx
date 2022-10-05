import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = ({video}) => (
        <section className={styles.detail}>
                <iframe
                className={styles.video}
                id="ytplayer"
                type="text/html"
                width="100%"
                height="500px"
                src={`http://www.youtube.com/embed/${video.id}`}
                frameborder="0"
                allowfullscreen
                ></iframe>

        </section>
        );

export default VideoDetail;