import React from 'react';
import styles from './GalleryJS.module.scss';
import { modulo } from '@danehansen/math';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class GalleryJS extends React.Component {
  static propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  state = {
    currentImageNum: 0,
  };

  render() {
    const { currentImageNum } = this.state;
    const { images } = this.props;
    return (
      <div className={styles.root}>
        <img alt="" className={styles.ghostImg} src={images[currentImageNum]} />
        <img alt="" className={styles.img} src={images[currentImageNum]} />
        <nav className={styles.nav}>
          <button className={styles.button} onClick={this._onNextClick}>
            <div className={classnames(styles.triangle, styles.prev)} />
          </button>
          <button className={styles.button} onClick={this._onPrevClick}>
            <div className={classnames(styles.triangle, styles.next)} />
          </button>
        </nav>
      </div>
    );
  }

  _onPrevClick = () => {
    const { currentImageNum } = this.state;
    const { length } = this.props.images;
    this.setState({ currentImageNum: modulo(currentImageNum - 1, length) });
  };

  _onNextClick = () => {
    const { currentImageNum } = this.state;
    const { length } = this.props.images;
    this.setState({ currentImageNum: (currentImageNum + 1) % length });
  };
}
