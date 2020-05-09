import React from 'react';
import styles from './Home.module.scss';
import { random} from '@danehansen/math';

export default function Home() {
  const blocks = []
  for(let i = 0; i < 1000; i++) {
    blocks.push(<div className={styles.block} style={{backgroundColor: `rgba(${random(0,255,true)},${random(0,255,true)},${random(0,255,true)},1)`}} key={i}/>)
  }

  return (
    <div className={styles.root}>
      {blocks}
    </div>
  );
}
