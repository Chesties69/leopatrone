import React from 'react';
import styles from './App.module.scss';
import { Link } from 'react-router-dom';

export default function App({ children }) {
  return (
    <div>
      {children}
      <nav className={styles.nav}>
        <Link className={styles.link} to="/">
          Home
        </Link>
        <Link className={styles.link} to="/gallery">
          Gallery
        </Link>
      </nav>
    </div>
  );
}
