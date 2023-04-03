import React, { useEffect } from 'react';
import video from './ht-skull-1080.mp4';

import * as styles from './Video.module.scss';

export default function Video() {
  const vid = React.useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          vid.current?.play();
        }
      },
      { threshold: 0.25 },
    );

    if (vid.current) {
      observer.observe(vid.current);
    }

    return () => {
      if (vid.current) {
        observer.unobserve(vid.current);
      }
    };
  }, [vid.current]);

  return (
    <video loop muted playsInline ref={vid} className={styles.video}>
      <source src={video} type="video/mp4" />
    </video>
  );
}
