import React, { useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import './app.css';
import Header from './components/Header';
import Intro from './components/Intro';
import Screen from './components/Screen';

export default function App() {
  const containerRef = useRef(null);

  return (
    <>
      <Header />
      <LocomotiveScrollProvider
        options={{ smooth: true }}
        containerRef={containerRef}
      >
        <main className="root" data-scroll-container ref={containerRef}>
          <Intro />
          <Screen />
        </main>
      </LocomotiveScrollProvider>
    </>
  );
}
