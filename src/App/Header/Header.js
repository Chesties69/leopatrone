import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className={styles.root}>
      <Link className={styles.homeLink} to="/">
        <h1 className={styles.h1}>Leo Patrone</h1>
      </Link>
      <Link className={styles.link} to="/weddings">
        Weddings
      </Link>
      <Link className={styles.link} to="/lifestyle">
        Lifestyle
      </Link>
      <Link className={styles.link} to="/portraits">
        Portraits
      </Link>
      <Link className={styles.link} to="/about">
        About
      </Link>
      <Link className={styles.link} to="/contact">
        Contact
      </Link>
      <a
        className={styles.link}
        href="https://www.instagram.com/leopatrone/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Instagram
      </a>
    </nav>
  );
}
