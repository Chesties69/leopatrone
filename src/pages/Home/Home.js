import React from 'react';
import styles from './Home.module.scss';
import { useEffect, useState } from 'react';
import Links from './Links/Links';

const STYLES = [
  { mixBlendMode: 'normal' },
  { mixBlendMode: 'multiply' },
  { mixBlendMode: 'screen' },
  { mixBlendMode: 'overlay' },
  { mixBlendMode: 'darken' },
  { mixBlendMode: 'lighten' },
  { mixBlendMode: 'color-dodge' },
  { mixBlendMode: 'hard-light' },
  { mixBlendMode: 'soft-light' },
  { mixBlendMode: 'difference' },
  { mixBlendMode: 'hue' },
  { mixBlendMode: 'saturation' },
  { mixBlendMode: 'color' },
  // {mixBlendMode: 'luminsity'},
  // {mixBlendMode: 'exclusion'},
  // {mixBlendMode: 'color-burn'},
];

export default function Home() {
  let [currentStyleNum, setCurrentStyleNum] = useState(0);
  let [hasLinks, setHasLinks] = useState(false);
  let [stripeStyle, setStripeStyle] = useState({ height: 0 });
  let [wordStyle, setWordStyle] = useState({ opacity: 0, transform: 'translateX(-100%)' });

  useEffect(function () {
    setStripeStyle(null);
    setWordStyle(null);
  }, []);

  useEffect(
    function () {
      function incrementCurrentStyleNum() {
        if (currentStyleNum < STYLES.length) {
          setCurrentStyleNum(currentStyleNum + 1);
        } else {
          setHasLinks(true);
        }
      }

      const i = setTimeout(incrementCurrentStyleNum, 300);

      return function () {
        clearTimeout(i);
      };
    },
    [currentStyleNum],
  );

  let rootStyle;
  if (currentStyleNum < STYLES.length) {
  } else {
    rootStyle = { background: 'white' };
  }

  return (
    <div className={styles.root} style={rootStyle}>
      {STYLES.map(function (style, index) {
        return (
          <div
            className={styles.gradient}
            key={index}
            style={{
              ...STYLES[index],
              visibility: index === currentStyleNum ? 'visible' : 'hidden',
            }}
          />
        );
      })}
      <div className={styles.content}>
        <div className={styles.nameWrapper}>
          <div className={styles.stripe} style={stripeStyle} />
          <h1 className={styles.name} style={wordStyle}>
            Leo
            <br />
            Patrone
            <br />
            Photography
          </h1>
        </div>
        <Links show={hasLinks} />
      </div>
    </div>
  );
}
