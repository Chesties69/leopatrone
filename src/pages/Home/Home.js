import React from 'react';
import styles from './Home.module.scss';
import { random } from '@danehansen/math';
import SizeObserver from 'components/SizeObserver/SizeObserver';

const TARGET_SIZE = 50;

export default function Home() {
  return (
    <SizeObserver className={styles.root}>
      {function (w, h) {
        const columns = Math.round(w / TARGET_SIZE);
        const rows = Math.round(h / TARGET_SIZE);
        const boxWidth = w / columns;
        const boxHeight = h / rows;
        const style = {
          height: `${boxHeight}px`,
          width: `${boxWidth}px`,
        };
        const total = columns * rows;
        const blocks = [];
        for (let i = 0; i < total; i++) {
          blocks.push(
            <div
              className={styles.block}
              style={{
                ...style,
                backgroundColor: `rgba(${random(0, 255, true)},${random(0, 255, true)},${random(
                  0,
                  255,
                  true,
                )},1)`,
              }}
              key={i}
            />,
          );
        }

        return blocks;
      }}
    </SizeObserver>
  );
}
