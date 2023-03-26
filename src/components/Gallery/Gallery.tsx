import { StaticImage } from 'gatsby-plugin-image';
import { IStaticImageProps } from 'gatsby-plugin-image/dist/src/components/static-image.server';
import React from 'react';
import Video from '../Video';

import * as styles from './Gallery.module.scss';

const GalleryItem = ({ staticImage }: { staticImage: JSX.Element }) => {
  return staticImage;
};

export default function Gallery() {
  return (
    <div className={styles.gallery}>
      <Video />
      <GalleryItem
        staticImage={
          <StaticImage
            className={styles.image}
            src="./assets/images/ht-closeup-1.jpg"
            alt=""
            placeholder="blurred"
            layout="fullWidth"
            formats={['auto', 'webp', 'avif']}
            quality={80}
          />
        }
      />
      <GalleryItem
        staticImage={
          <StaticImage
            className={styles.image}
            src="./assets/images/ht-closeup-2.jpg"
            alt=""
            placeholder="blurred"
            layout="fullWidth"
            formats={['auto', 'webp', 'avif']}
            quality={80}
          />
        }
      />
      <GalleryItem
        staticImage={
          <StaticImage
            className={styles.image}
            src="./assets/images/ht-closeup-3.jpg"
            alt=""
            placeholder="blurred"
            layout="fullWidth"
            formats={['auto', 'webp', 'avif']}
            quality={80}
          />
        }
      />
      <GalleryItem
        staticImage={
          <StaticImage
            className={styles.image}
            src="./assets/images/ht-poster-1.jpg"
            alt=""
            placeholder="blurred"
            layout="fullWidth"
            formats={['auto', 'webp', 'avif']}
            quality={80}
          />
        }
      />
      <GalleryItem
        staticImage={
          <StaticImage
            className={styles.image}
            src="./assets/images/ht-poster-2.jpg"
            alt=""
            placeholder="blurred"
            layout="fullWidth"
            formats={['auto', 'webp', 'avif']}
            quality={80}
          />
        }
      />
      <GalleryItem
        staticImage={
          <StaticImage
            className={styles.image}
            src="./assets/images/ht-poster-3.jpg"
            alt=""
            placeholder="blurred"
            layout="fullWidth"
            formats={['auto', 'webp', 'avif']}
            quality={80}
          />
        }
      />
    </div>
  );
}
