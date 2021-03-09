import { useRef, useState, useEffect } from 'react';
import styles from './App.module.scss';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import PropTypes from 'prop-types';
import 'styles/reset.scss';
import { STORE } from 'utils/constants';
import { useViewportDimensions, useScrollPosition } from 'utils/hooks';

export default function App({ children }) {
  const footerNode = useRef();
  const headerNode = useRef();
  const [innerWidth, innerHeight] = useViewportDimensions();
  const { 1: scrollY } = useScrollPosition();
  const [headerHeight, setHeaderHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    if (!headerNode.current || !footerNode.current) {
      return;
    }
    setHeaderHeight(headerNode.current.offsetHeight);
    setFooterHeight(footerNode.current.offsetHeight);
  }, [headerNode, footerNode]);

  return (
    <STORE.Provider
      value={{
        innerWidth,
        innerHeight,
        scrollY,
        headerHeight,
        footerHeight,
      }}
    >
      <div className={styles.root}>
        <div className={styles.headerWrapper} ref={headerNode}>
          <Header />
        </div>
        <div className={styles.contentWrapper}>{children}</div>
        <div className={styles.footerWrapper} ref={footerNode}>
          <Footer />
        </div>
      </div>
    </STORE.Provider>
  );
}

App.propTypes = {
  children: PropTypes.node,
};
