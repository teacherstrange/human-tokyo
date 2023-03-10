import React, { useEffect, useRef } from 'react';
import Gallery from './components/Gallery';

import Header from './components/Header';
import Intro from './components/Intro';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <Gallery />
      </main>
    </>
  );
}
