import React, { useEffect, useRef } from 'react';

import Header from './components/Header';
import Intro from './components/Intro';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <img
          src="http://unsplash.it/g/800/600?random&blur&gravity=center"
          alt=""
        />
        <img
          src="http://unsplash.it/g/800/600?random&blur&gravity=center"
          alt=""
        />
        <img
          src="http://unsplash.it/g/800/600?random&blur&gravity=center"
          alt=""
        />
        <img
          src="http://unsplash.it/g/800/600?random&blur&gravity=center"
          alt=""
        />
      </main>
    </>
  );
}
