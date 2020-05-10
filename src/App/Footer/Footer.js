import React from 'react';
import styles from './Footer.module.scss';
import { LEO_EMAIL, LEO_PHONE, YEAR } from 'utils/constants';

export default function Footer() {
  return (
    <footer className={styles.root}>
      <a className={styles.link} href={`mailto:${LEO_EMAIL}`}>
        {LEO_EMAIL}
      </a>{' '}
      •{' '}
      <a className={styles.link} href={`tel:+1${LEO_PHONE}`}>
        {LEO_PHONE}
      </a>{' '}
      • Made in U.S.A. • ©{YEAR}
    </footer>
  );
}
