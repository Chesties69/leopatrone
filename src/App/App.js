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
        <Link className={styles.link} to="/galleryscroll">
          GalleryScroll
        </Link>
        <Link className={styles.link} to="/galleryjs">
          GalleryJS
        </Link>
      </nav>
    </div>
  );
}
