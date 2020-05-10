import React from 'react';
import styles from './App.module.scss';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import PropTypes from 'prop-types';
import 'styles/reset.scss';

export default function App({ children }) {
  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node,
};
