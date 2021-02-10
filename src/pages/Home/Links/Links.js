import React from 'react';
import styles from './Links.module.scss';
import {ROUTE_WEDDINGS,ROUTE_LIFESTYLE, ROUTE_PORTRAITS, ROUTE_ABOUT, ROUTE_CONTACT, INSTAGRAM } from 'utils/constants';

export default function Links({show}) {
  let stripeStyle;
  let linkStyle;
  let rootStyle;
  if (!show) {
    linkStyle = {opacity: 0, transform: 'translateX(-100%)'};
    stripeStyle = {height: 0}
    rootStyle = {visibility: 'hidden'}
  }

  return (
    <div className={styles.root} style={rootStyle}>
      <div className={styles.stripe} style={stripeStyle} />
      <a className={styles.a} href={ROUTE_WEDDINGS} style={linkStyle}>Weddings</a>
      <a className={styles.a} href={ROUTE_LIFESTYLE} style={linkStyle}>Lifestyle</a>
      <a className={styles.a} href={ROUTE_PORTRAITS} style={linkStyle}>Portraits</a>
      <a className={styles.a} href={ROUTE_ABOUT} style={linkStyle}>About</a>
      <a className={styles.a} href={ROUTE_CONTACT} style={linkStyle}>Contact</a>
      <a className={styles.a} href={INSTAGRAM} style={linkStyle}>Instagram</a>
    </div>
  );
}
