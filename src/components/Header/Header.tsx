import React from 'react';
import * as styles from './Header.module.scss';
import Symbol from '../Symbol';
import Wordmark from '../Wordmark';
import Wordmark2 from '../Wordmark2';

export default function Header() {
  return (
    <div className={styles.header}>
      <Wordmark />
      <Wordmark2 />
      <Symbol />
    </div>
  );
}
