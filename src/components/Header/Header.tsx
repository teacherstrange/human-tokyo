import React from 'react';
import './Header.css';
import Symbol from '../Symbol';
import Wordmark from '../Wordmark';
import Wordmark2 from '../Wordmark2';

export default function Header() {
  return (
    <div className="header">
      <Wordmark />
      <Wordmark2 />
      <Symbol />
    </div>
  );
}
