import React from 'react';
import styles from './App.module.scss';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import PropTypes from 'prop-types';
import 'styles/reset.scss';
import { STORE } from 'utils/constants';
import ResizeListener from 'components/ResizeListener/ResizeListener';
import ScrollListener from 'components/ScrollListener/ScrollListener';

let headerHeight = 0;
let footerHeight = 0;
let lastInnerWidth = window.innerWidth;

export default class App extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  componentDidMount() {
    this.forceUpdate();
  }

  render() {
    const { children } = this.props;
    return (
      <ResizeListener>
        {(innerWidth, innerHeight) => {
          return (
            <ScrollListener>
              {(scrollX, scrollY) => {
                if (innerWidth !== lastInnerWidth) {
                  headerHeight = this._headerNode.offsetHeight;
                  footerHeight = this._footerNode.offsetHeight;
                  lastInnerWidth = innerWidth;
                }

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
                      <div
                        className={styles.headerWrapper}
                        ref={(node) => {
                          if (node !== this._headerNode) {
                            this._headerNode = node;
                            if (node) {
                              headerHeight = node.offsetHeight;
                            }
                          }
                        }}
                      >
                        <Header />
                      </div>
                      <div className={styles.contentWrapper}>{children}</div>
                      <div
                        className={styles.footerWrapper}
                        ref={(node) => {
                          if (node !== this._footerNode) {
                            this._footerNode = node;
                            if (node) {
                              footerHeight = node.offsetHeight;
                            }
                          }
                        }}
                      >
                        <Footer />
                      </div>
                    </div>
                  </STORE.Provider>
                );
              }}
            </ScrollListener>
          );
        }}
      </ResizeListener>
    );
  }
}
