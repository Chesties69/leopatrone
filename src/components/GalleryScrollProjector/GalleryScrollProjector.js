import React from 'react';
import styles from './GalleryScrollProjector.module.scss';
import PropTypes from 'prop-types';
import { containRect, scaleRectToArea } from './utils';
import { normalize } from '@danehansen/math';
import ease from 'eases/cubic-in';
import Indicator from './Indicator/Indicator';
import { STORE } from 'utils/constants';

const SHARED_MARGIN = parseInt(styles.margin);

export default class GalleryScrollProjector extends React.Component {
  static propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  state = {};

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
            // if (minRatio === ratio) {
            //   console.log('minRatio:', image, ratio);
            // }
            // if (maxRatio === ratio) {
            //   console.log('maxRatio:', image, ratio);
            // }
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

  _renderImages(innerWidth, innerHeight, scrollY, headerHeight, footerHeight) {
    const maxWidth = innerWidth - SHARED_MARGIN * 2;
    const maxHeight = innerHeight - headerHeight - SHARED_MARGIN * 2;
    const { imageDimensions, maxAspectRatio, minAspectRatio } = this.state;
    console.log({ viewable_ratio: maxWidth / maxHeight, minAspectRatio, maxAspectRatio });
    const { images } = this.props;
    const maxRatioRect = containRect(maxAspectRatio, 1, maxWidth, maxHeight);
    const minRatioRect = containRect(minAspectRatio, 1, maxWidth, maxHeight);
    const maxRatioArea = maxRatioRect.width * maxRatioRect.height;
    const minRatioArea = minRatioRect.width * minRatioRect.height;
    const area = Math.min(maxRatioArea, minRatioArea);
    let totalHeights = 0;
    let distToClosestActive = Number.MAX_VALUE;
    const progressDist = maxRatioRect.height;

    return images.map((image, index) => {
      const { width: imageWidth, height: imageHeight } = imageDimensions[index];
      const rect = scaleRectToArea(imageWidth, imageHeight, area);
      const imgStyle = {
        width: `${rect.width}px`,
        height: `${rect.height}px`,
      };
      let imgYOffset = 0;
      let imgXOffset = 0;
      let wrapperHeight;
      let progressMiddle;
      if (index === 0) {
        // good
        progressMiddle = Math.round(headerHeight * 0.5 - SHARED_MARGIN * 0.5); // dup of imgYOffset below
        // bad
      } else {
        // good
        // bad
        wrapperHeight = Math.ceil(rect.height + SHARED_MARGIN); // duplicate
        progressMiddle = Math.round(
          totalHeights + headerHeight + (wrapperHeight - innerHeight) * 0.5,
        );
      }

      if (index > 0 && index < images.length - 1) {
        // good
        // bad
      } else {
        // good
        // bad
      }

      if (index === images.length - 1) {
        // good
        imgYOffset = Math.round(headerHeight * 0.5 + SHARED_MARGIN * 0.5);
        const between = innerHeight - headerHeight - footerHeight;
        const excess = between - rect.height;
        wrapperHeight = Math.ceil(between - excess * 0.5 + imgYOffset);

        // bad

        progressMiddle = Math.round(
          totalHeights +
            headerHeight +
            rect.height * 0.5 +
            SHARED_MARGIN * -0.5 -
            innerHeight * 0.5 +
            imgYOffset * 1,
        );

        const threshold = totalHeights + wrapperHeight - innerHeight + headerHeight;
        this._indicatorClassName =
          scrollY > threshold ? styles.indicatorAbsolute : styles.indicatorFixed;
      } else {
        // good
        wrapperHeight = Math.ceil(rect.height + SHARED_MARGIN);
        imgYOffset = Math.round(headerHeight * 0.5 - SHARED_MARGIN * 0.5);
        // bad
      }

      // switch (index) {
      //   case images.length - 1: // last image
      //     wrapperHeight = Math.round(
      //       innerHeight - footerHeight - (innerHeight - rect.height) * 0.5 + SHARED_MARGIN * 0.5,
      //     );
      //     progressMiddle = Math.round(
      //       totalHeights +
      //         headerHeight +
      //         rect.height * 0.5 +
      //         SHARED_MARGIN * 0.5 -
      //         innerHeight * 0.5,
      //     );
      //     break;
      //   default:
      //     // all middle images
      //     wrapperHeight = Math.round(innerHeight - headerHeight - SHARED_MARGIN);
      // progressMiddle = Math.round(
      //   totalHeights + headerHeight + (wrapperHeight - innerHeight) * 0.5,
      // );
      //     break;
      // }

      const distToThisActive = Math.abs(scrollY - progressMiddle);
      if (distToThisActive < distToClosestActive) {
        distToClosestActive = distToThisActive;
        this._closestActive = index;
      }

      const progressTop = progressMiddle - progressDist * 0.5;
      const progressBottom = progressMiddle + progressDist * 0.5;
      totalHeights += wrapperHeight;

      if (scrollY >= progressTop && scrollY <= progressBottom) {
        const norm = normalize(progressTop, progressBottom, scrollY) * 2 - 1;
        const eased = ease(Math.abs(norm));
        // imgXOffset = -eased * progressDist;
        imgStyle.opacity = 1 - eased;
      } else {
        imgStyle.visibility = 'hidden';
      }

      imgStyle.transform = `translate(${imgXOffset}px, ${imgYOffset}px)`;

      const wrapperStyle = {
        height: `${wrapperHeight}px`,
      };

      return (
        <div className={styles.imgWrapper} key={image} style={wrapperStyle}>
          <img alt="" className={styles.img} src={image} style={imgStyle} />
        </div>
      );
    });
  }

  render() {
    const { maxAspectRatio, minAspectRatio } = this.state;
    const { images } = this.props;
    return (
      <STORE.Consumer>
        {({ innerHeight, innerWidth, scrollY, headerHeight, footerHeight }) => {
          if (
            !innerHeight ||
            !innerWidth ||
            !headerHeight ||
            !footerHeight ||
            !maxAspectRatio ||
            !minAspectRatio
          ) {
            return null;
          }
          return (
            <div className={styles.root} style={{ paddingTop: `${0}px` }}>
              {this._renderImages(innerWidth, innerHeight, scrollY, headerHeight, footerHeight)}
              <Indicator
                className={this._indicatorClassName}
                current={this._closestActive + 1}
                total={images.length}
              />
            </div>
          );
        }}
      </STORE.Consumer>
    );
  }
}
