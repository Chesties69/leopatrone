import React from 'react';
import styles from './GalleryJS.module.scss';
import { modulo } from '@danehansen/math';

const IMAGES = [
  '001.jpg',
  '002.jpg',
  '003.jpg',
  '004.jpg',
  '005.jpg',
  '006.jpg',
  '007.jpg',
  '008.jpg',
  '009.jpg',
  '010.jpg',
  '011.jpg',
  '012.jpg',
];

export default class GalleryJS extends React.Component {
  state = {
    currentImageNum: 0,
  };

  render() {
    const { currentImageNum } = this.state;
    return (
      <div>
        <div className={styles.gallery}>
          <img
            alt=""
            className={styles.img}
            src={require(`./sizesgallery/${IMAGES[currentImageNum]}`)}
          />
        </div>
        <nav className={styles.nav}>
          <button className={styles.button} onClick={this._onNextClick} />
          <button className={styles.button} onClick={this._onPrevClick} />
        </nav>
      </div>
    );
  }

  _onPrevClick = () => {
    const { currentImageNum } = this.state;
    this.setState({ currentImageNum: modulo(currentImageNum - 1, IMAGES.length) });
  };

  _onNextClick = () => {
    const { currentImageNum } = this.state;
    this.setState({ currentImageNum: (currentImageNum + 1) % IMAGES.length });
  };
}
