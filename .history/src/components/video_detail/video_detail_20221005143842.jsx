import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = ({video}) => (
        <section className={styles.detail}>
                <iframe
                id="ytplayer"
                type="text/html"
                width="720"
                height="405"
                src="http://www.youtube.com/embed/M71c1UVf-VE"
                frameborder="0"
                allowfullscreen
                ></iframe>

        </section>
        );

export default VideoDetail;