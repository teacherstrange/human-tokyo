import React from 'react';
import Header from '../Header';
import '@fontsource/noto-sans-jp/300.css';
import '@fontsource/inter/200.css';
import './reset.css';
import './global.css';

const Layout = ({ children }: { children: JSX.Element[] }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
