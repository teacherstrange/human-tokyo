import { motion } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';
import { IStaticImageProps } from 'gatsby-plugin-image/dist/src/components/static-image.server';
import React from 'react';
import Video from '../Video';

import * as styles from './Gallery.module.scss';

const GalleryItem = ({ staticImage }: { staticImage: JSX.Element }) => {
  return (
    <motion.div
      className={styles.image}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { ease: 'easeOut', duration: 0.6 },
      }}
    >
      {staticImage}
    </motion.div>
  );
};

export default function Gallery() {
  return (
    <div className={styles.gallery}>
      <Video />
      <GalleryItem
        staticImage={
          <StaticImage
            src="./assets/images/ht-poster.jpg"
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
            src="./assets/images/ht-detail-1.jpg"
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
            src="./assets/images/ht-detail-2.jpg"
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
            src="./assets/images/ht-detail-3.jpg"
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
            src="./assets/images/ht-detail-4.jpg"
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
            src="./assets/images/ht-detail-5.jpg"
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
            src="./assets/images/ht-detail-6.jpg"
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
            src="./assets/images/ht-detail-7.jpg"
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
            src="./assets/images/ht-detail-8.jpg"
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
