import PropTypes from 'prop-types';
import styles from './Indicator.module.scss';
import classnames from 'classnames';

export default function Indicator({ className, current, total }) {
  return (
    <aside className={classnames(styles.root, className)}>
      <div className={styles.current}>{current}</div>
      <div className={styles.divider}>/</div>
      <div className={styles.total}>{total}</div>
    </aside>
  );
}

Indicator.propTypes = {
  current: PropTypes.number,
  total: PropTypes.number,
};
