import styles from './Header.module.scss';
import { Link, withRouter } from 'react-router-dom';
import {
  INSTAGRAM,
  ROUTE_HOME,
  ROUTE_WEDDINGS,
  ROUTE_LIFESTYLE,
  ROUTE_PORTRAITS,
  ROUTE_ABOUT,
  ROUTE_CONTACT,
} from 'utils/constants';
import classnames from 'classnames';

function Header({ location: { pathname } }) {
  return (
    <nav className={styles.root}>
      <Link
        className={classnames(styles.homeLink, pathname === ROUTE_HOME && styles.selected)}
        to={ROUTE_HOME}
      >
        <h1 className={styles.h1}>Leo Patrone</h1>
      </Link>
      <div className={styles.pageLinks}>
        <Link
          className={classnames(styles.link, pathname === ROUTE_WEDDINGS && styles.selected)}
          to={ROUTE_WEDDINGS}
        >
          Weddings
        </Link>
        <Link
          className={classnames(styles.link, pathname === ROUTE_LIFESTYLE && styles.selected)}
          to={ROUTE_LIFESTYLE}
        >
          Lifestyle
        </Link>
        <Link
          className={classnames(styles.link, pathname === ROUTE_PORTRAITS && styles.selected)}
          to={ROUTE_PORTRAITS}
        >
          Portraits
        </Link>
        <Link
          className={classnames(styles.link, pathname === ROUTE_ABOUT && styles.selected)}
          to={ROUTE_ABOUT}
        >
          About
        </Link>
        <Link
          className={classnames(styles.link, pathname === ROUTE_CONTACT && styles.selected)}
          to={ROUTE_CONTACT}
        >
          Contact
        </Link>
        <a className={styles.link} href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </div>
    </nav>
  );
}

export default withRouter(Header);
