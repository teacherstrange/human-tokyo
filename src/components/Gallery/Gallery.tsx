import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import * as styles from './Gallery.module.scss';

export default function Gallery() {
  return (
    <div className={styles.gallery}>
      <StaticImage
        className={styles.image}
        src="./assets/images/ht-closeup-1.jpg"
        alt=""
        placeholder="blurred"
        layout="fullWidth"
        formats={['auto', 'webp', 'avif']}
        quality={80}
      />
      <StaticImage
        className={styles.image}
        src="./assets/images/ht-closeup-2.jpg"
        alt=""
        placeholder="blurred"
        layout="fullWidth"
        formats={['auto', 'webp', 'avif']}
        quality={80}
      />
      <StaticImage
        className={styles.image}
        src="./assets/images/ht-closeup-3.jpg"
        alt=""
        placeholder="blurred"
        layout="fullWidth"
        formats={['auto', 'webp', 'avif']}
        quality={80}
      />
      <StaticImage
        className={styles.image}
        src="./assets/images/ht-poster-1.jpg"
        alt=""
        placeholder="blurred"
        layout="fullWidth"
        formats={['auto', 'webp', 'avif']}
        quality={80}
      />
      <StaticImage
        className={styles.image}
        src="./assets/images/ht-poster-2.jpg"
        alt=""
        placeholder="blurred"
        layout="fullWidth"
        formats={['auto', 'webp', 'avif']}
        quality={80}
      />
      <StaticImage
        className={styles.image}
        src="./assets/images/ht-poster-3.jpg"
        alt=""
        placeholder="blurred"
        layout="fullWidth"
        formats={['auto', 'webp', 'avif']}
        quality={80}
      />
    </div>
  );
}
