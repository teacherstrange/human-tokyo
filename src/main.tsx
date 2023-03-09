import React from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/noto-sans-jp/300.css';
import './reset.css';
import './locomotive-scroll.css';
import './global.css';
import App from './App';

const domNode = document.getElementById('root');
const root = createRoot(domNode as HTMLElement);

root.render(<App />);
