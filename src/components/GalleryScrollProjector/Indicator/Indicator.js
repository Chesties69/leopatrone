import React from 'react';
import PropTypes from 'prop-types';
import styles from './Indicator.module.scss';

export default function Indicator({ current, total }) {
  return (
    <div className={styles.root}>
      <div className={styles.current}>{current}</div>
      <div className={styles.divider}>/</div>
      <div className={styles.total}>{total}</div>
    </div>
  );
}

Indicator.propTypes = {
  current: PropTypes.number,
  total: PropTypes.number,
};
