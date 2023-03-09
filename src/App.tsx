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
        options={{
          smooth: true,
          // ... all available Locomotive Scroll instance options
        }}
        watch={
          [
            //..all the dependencies you want to watch to update the scroll.
            //  Basicaly, you would want to watch page/location changes
            //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
          ]
        }
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
