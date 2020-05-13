import React from 'react';
import ReactDOM from 'react-dom';
import styles from './GalleryScrollProjector.module.scss';
import PropTypes from 'prop-types';
import SizeObserver from 'components/SizeObserver/SizeObserver';
import { containRect, scaleRectToArea } from './utils';
import { normalize } from '@danehansen/math';

const EASES = {
  easeInCirc(currentTime, begining, change, duration) {
    return -change * (Math.sqrt(1 - (currentTime /= duration) * currentTime) - 1) + begining;
  },
  easeOutCirc(currentTime, begining, change, duration) {
    return (
      change * Math.sqrt(1 - (currentTime = currentTime / duration - 1) * currentTime) + begining
    );
  },
};

export default class GalleryScrollProjector extends React.Component {
  static propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  state = {
    maxAspectRatio: 0,
    minAspectRatio: 0,
  };

  _rootNode;

  componentDidMount() {
    const { images } = this.props;
    const promises = [];
    let minRatio = Number.MAX_VALUE;
    let maxRatio = 0;
    for (const image of images) {
      promises.push(
        new Promise((fulfill, reject) => {
          const i = new Image();
          i.addEventListener('load', ({ target: { width, height } }) => {
            const ratio = width / height;
            minRatio = Math.min(ratio, minRatio);
            maxRatio = Math.max(ratio, maxRatio);
            fulfill({ width, height, ratio });
          });
          i.src = image;
        }),
      );
    }
    Promise.all(promises).then((values) => {
      this.setState({
        imageDimensions: values,
        maxAspectRatio: maxRatio,
        minAspectRatio: minRatio,
      });
    });
  }

  componentWillUnmount() {
    this._rootNode.removeEventListener('scroll', this._onScroll);
  }

  render() {
    const { children, images } = this.props;
    const { imageDimensions, scrollTop, maxAspectRatio, minAspectRatio } = this.state;
    return (
      <SizeObserver className={styles.root} ref={this._setRootNode}>
        {function (maxWidth, maxHeight) {
          if (!imageDimensions) {
            return;
          }

          const aspectRatioHolder = maxWidth / maxHeight;

          let lowestArea = Number.MAX_VALUE;

          const maxRatioRect = containRect(maxAspectRatio || 1, 1, maxWidth || 1, maxHeight || 1);
          const minRatioRect = containRect(minAspectRatio || 1, 1, maxWidth || 1, maxHeight || 1);
          const maxRatioArea = maxRatioRect.width * maxRatioRect.height;
          const minRatioArea = minRatioRect.width * minRatioRect.height;
          const area = Math.min(maxRatioArea, minRatioArea);

          return images.map(function (image, index) {
            const { width: imageWidth, height: imageHeight } = imageDimensions[index];
            const rect = scaleRectToArea(imageWidth, imageHeight, area);
            const style = {
              width: `${rect.width}px`,
              height: `${rect.height}px`,
            };

            const progressTop = (index - 1) * maxHeight;
            const progressBottom = (index + 1) * maxHeight;
            if (scrollTop >= progressTop && scrollTop <= progressBottom) {
              const norm = normalize(progressTop, progressBottom, scrollTop) * 2 - 1;
              const eased = EASES.easeInCirc(norm, 0, norm, 1);
              style.transform = `translateX(${-Math.abs(eased) * maxWidth}px)`;
            }

            return (
              <div className={styles.holder} key={image}>
                <img alt="" className={styles.img} src={image} style={style} />
              </div>
            );
          });
        }}
      </SizeObserver>
    );
  }

  _onScroll = () => {
    const { scrollTop: scrollTopState } = this.state;
    const { scrollTop: scrollTopRef } = this._rootNode;
    if (scrollTopState !== scrollTopRef) {
      this.setState({ scrollTop: scrollTopRef });
    }
  };

  _setRootNode = (node) => {
    if (node) {
      node = ReactDOM.findDOMNode(node);
      if (this._rootNode !== node) {
        if (this._rootNode) {
          this._rootNode.removeEventListener('scroll', this._onScroll);
        }
        this._rootNode = node;
        this._rootNode.addEventListener('scroll', this._onScroll);
        this._onScroll();
      }
    }
  };
}
