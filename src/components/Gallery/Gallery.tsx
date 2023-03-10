import Image1 from './assets/Image-1.jpg';
import Image2 from './assets/Image-2.jpg';
import Image3 from './assets/Image-3.jpg';
import Image4 from './assets/Image-4.jpg';
import Image5 from './assets/Image-5.jpg';
import Image6 from './assets/Image-6.jpg';

import React from 'react';
import './Gallery.css';

export default function Gallery() {
  return (
    <div className="gallery">
      <img src={Image1} alt="" />
      <img src={Image2} alt="" />
      <img src={Image3} alt="" />
      <img src={Image4} alt="" />
      <img src={Image5} alt="" />
      <img src={Image6} alt="" />
    </div>
  );
}
