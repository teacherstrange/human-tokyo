import React, { useEffect, useRef } from 'react';

import Header from './components/Header';
import Intro from './components/Intro';
import Screen from './components/Screen';
import LocomotiveScroll from 'locomotive-scroll';

export default function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      new LocomotiveScroll({
        el: containerRef.current,
        smooth: true,
      });
    }
  }, [containerRef.current]);

  return (
    <>
      <Header />
      <main ref={containerRef}>
        <Intro />
        <Screen />
      </main>
    </>
  );
}
