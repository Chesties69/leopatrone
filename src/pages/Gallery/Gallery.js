import React from 'react';
import styles from './Gallery.module.scss';
import classnames from 'classnames';

const IMAGES = [
  /*'Jenzack0017.jpg',
  'Jenzack0082.jpg',
  'Jenzack0115.jpg',
  'Jenzack0125.jpg',
  'Jenzack0175.jpg',
  'Jenzack0177.jpg',
  'Jenzack0189.jpg',
  'Jenzack0191.jpg',
  'Jenzack0216.jpg',
  'Jenzack0268.jpg',
  'Jenzack0272.jpg',
  'Jenzack0274.jpg',
  'Jenzack0294.jpg',
  'Jenzack0412.jpg',
  'Jenzack0420.jpg',
  'Jenzack0424.jpg',
  'Jenzack0431.jpg',
  'Jenzack0432.jpg',
  'Jenzack0500.jpg',
  'Jenzack0549.jpg',
  'Jenzack0562.jpg',
  'Jenzack0563.jpg',
  'Jenzack0568.jpg',
  'Jenzack0574.jpg',
  'Jenzack0612.jpg',
  'Jenzack0627.jpg',
  'Jenzack0793.jpg',
  'Jenzack0795.jpg',
  'Jenzack0809.jpg',*/
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

const TYPES = {
  VERTICAL_SCROLL: 'verticalScroll',
  HORIZONTAL_SCROLL: 'horizontalScroll',
  VERTICAL_SCROLL_STICKY: 'verticalScrollSticky',
  HORIZONTAL_SCROLL_STICKY: 'horizontalScrollSticky',
};

export default class Wedding1 extends React.Component {
  state = {
    type: TYPES.VERTICAL_SCROLL,
  };

  render() {
    const { type } = this.state;

    const labelNodes = [];

    for (let key in TYPES) {
      const typeName = TYPES[key];
      labelNodes.push(
        <label className={styles.label} key={typeName}>
          <input
            type="radio"
            value={typeName}
            checked={type === typeName}
            onChange={this._onChange}
          />
          {typeName}
        </label>,
      );
    }

    return (
      <div>
        <div className={classnames(styles.gallery, styles[type])}>
          {IMAGES.map(function (image) {
            return (
              <img
                alt=""
                key={image}
                className={styles.img}
                src={require(`./sizesgallery/${image}`)}
              />
            );
          })}
        </div>
        <nav className={styles.nav}>{labelNodes}</nav>
      </div>
    );
  }

  _onChange = ({ target: { value } }) => {
    this.setState({ type: value });
  };
}
