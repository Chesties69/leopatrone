import React from 'react';
import styles from './GalleryScroll.module.scss';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TYPES = {
  VERTICAL_SCROLL: 'verticalScroll',
  HORIZONTAL_SCROLL: 'horizontalScroll',
  VERTICAL_SCROLL_STICKY: 'verticalScrollSticky',
  HORIZONTAL_SCROLL_STICKY: 'horizontalScrollSticky',
};

export default class GalleryScroll extends React.Component {
  static propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  state = {
    type: TYPES.VERTICAL_SCROLL,
  };

  render() {
    const { type } = this.state;
    const { images } = this.props;

    const labelNodes = [];

    for (let key in TYPES) {
      const typeName = TYPES[key];
      labelNodes.push(
        <label className={styles.label} key={typeName}>
          <input
            checked={type === typeName}
            onChange={this._onChange}
            type="radio"
            value={typeName}
          />
          {typeName}
        </label>,
      );
    }

    return (
      <div className={styles.root}>
        <div className={classnames(styles.gallery, styles[type])}>
          {images.map(function (image) {
            return <img alt="" className={styles.img} key={image} src={image} />;
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
