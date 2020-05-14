﻿import React from 'react';
import ReactDOM from 'react-dom';
import styles from './GalleryScrollProjector.module.scss';
import PropTypes from 'prop-types';
import SizeObserver from 'components/SizeObserver/SizeObserver';
import { containRect, scaleRectToArea } from './utils';
import { normalize } from '@danehansen/math';
import ease from 'eases/cubic-in';
import Indicator from './Indicator/Indicator';

export default class GalleryScrollProjector extends React.Component {
  static propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  state = {
    scrollTop: 0,
  };

  _rootNode;

  componentDidMount() {
    const { images } = this.props;
    const promises = [];
    let minRatio = Number.MAX_VALUE;
    let maxRatio = 0;
    for (const image of images) {
      promises.push(
        // eslint-disable-next-line no-loop-func
        new Promise((resolve, reject) => {
          const i = new Image();
          i.addEventListener('load', ({ target: { width, height } }) => {
            const ratio = width / height;
            minRatio = Math.min(ratio, minRatio);
            maxRatio = Math.max(ratio, maxRatio);
            resolve({ width, height, ratio });
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

  _renderImages(maxWidth, maxHeight) {
    const { imageDimensions, scrollTop, maxAspectRatio, minAspectRatio } = this.state;
    const { images } = this.props;
    const maxRatioRect = containRect(maxAspectRatio, 1, maxWidth, maxHeight);
    const minRatioRect = containRect(minAspectRatio, 1, maxWidth, maxHeight);
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
        const eased = ease(Math.abs(norm));
        style.transform = `translateX(${-eased * maxWidth}px)`;
      }

      return (
        <div className={styles.holder} key={image}>
          <img alt="" className={styles.img} src={image} style={style} />
        </div>
      );
    });
  }

  render() {
    const { imageDimensions, scrollTop } = this.state;
    const { images } = this.props;
    return (
      <SizeObserver className={styles.root}>
        {(maxWidth, maxHeight) => {
          if (!imageDimensions || !maxWidth || !maxHeight) {
            return;
          }
          return (
            <React.Fragment>
              <div className={styles.holderHolder} ref={this._setRootNode}>
                {this._renderImages(maxWidth, maxHeight)}
              </div>
              <Indicator current={Math.round(scrollTop / maxHeight) + 1} total={images.length} />
            </React.Fragment>
          );
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
