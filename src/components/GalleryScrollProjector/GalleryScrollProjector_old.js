import React from 'react';
import styles from './GalleryScrollProjector.module.scss';
import PropTypes from 'prop-types';
import { containRect, scaleRectToArea } from './utils';
import { normalize } from '@danehansen/math';
import ease from 'eases/cubic-in';
import Indicator from './Indicator/Indicator';
import { STORE } from 'utils/constants';

const MARGIN = parseInt(styles.margin);
const BORDER_WIDTH = parseInt(styles.borderWidth);

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

  render() {
    const { maxAspectRatio, minAspectRatio } = this.state;
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

          const { images } = this.props;
          const { imageDimensions } = this.state;

          const extraImageHeight = (MARGIN + BORDER_WIDTH) * 2;
          const maxWidth = Math.max(0, innerWidth - extraImageHeight * 2);
          const maxHeight = Math.max(0, innerHeight - headerHeight - extraImageHeight * 2);
          const maxRatioRect = containRect(maxAspectRatio, 1, maxWidth, maxHeight);
          const minRatioRect = containRect(minAspectRatio, 1, maxWidth, maxHeight);
          const maxRatioArea = maxRatioRect.width * maxRatioRect.height;
          const minRatioArea = minRatioRect.width * minRatioRect.height;
          const area = Math.min(maxRatioArea, minRatioArea);
          const progressDist = minRatioRect.height;
          const headerYOffset = headerHeight * 0.5;

          let distToClosestActive = Number.MAX_VALUE;
          let indicatorThreshold;
          let closestActive;
          let lastWrapperHeight;
          let lastProgressMidde;
          let paddingTop;
          let paddingBottom;
          const imageNodes = images.map(function (image, index) {
            const { width: imageWidth, height: imageHeight } = imageDimensions[index];
            const rect = scaleRectToArea(imageWidth, imageHeight, area);
            const wrapperHeight = Math.ceil((rect.height + extraImageHeight) * 0.5) * 2;

            let progressMiddle;
            if (index === 0) {
              progressMiddle = 0;
              paddingTop = Math.round((innerHeight - wrapperHeight) * 0.5 - headerHeight);
            } else {
              progressMiddle =
                lastProgressMidde + lastWrapperHeight * 0.5 + wrapperHeight * 0.5 + MARGIN;
            }
            if (index === images.length - 1) {
              paddingBottom = Math.round((innerHeight - wrapperHeight - footerHeight) * 0.5);
              progressMiddle += footerHeight * 0.5;
              indicatorThreshold = progressMiddle - footerHeight;
            }

            const distToThisActive = Math.abs(scrollY - progressMiddle);
            if (distToThisActive < distToClosestActive) {
              distToClosestActive = distToThisActive;
              closestActive = index;
            }

            const imgStyle = {
              width: `${rect.width}px`,
              height: `${rect.height}px`,
            };
            let imgYOffset = 0;
            let imgXOffset = 0;
            const progressTop = progressMiddle - progressDist * 0.5;
            const progressBottom = progressMiddle + progressDist * 0.5;
            if (scrollY >= progressTop && scrollY <= progressBottom) {
              const norm = normalize(progressTop, progressBottom, scrollY) * 2 - 1;
              const eased = ease(norm);
              // imgXOffset = Math.abs(eased) * -100;
              // imgYOffset = eased * -1000;
              imgStyle.opacity = 1 - Math.abs(eased);
              imgStyle.transform = `translate(${imgXOffset}px, ${headerYOffset + imgYOffset}px)`;
              // const lowerLimit = 0.9;
              // imgStyle.transform = `scale(${
              //   (1 - Math.abs(eased)) * (1 - lowerLimit) + lowerLimit
              // }) translateY(${headerYOffset}px)`;
            } else {
              imgStyle.visibility = 'hidden';
              // imgStyle.transform = `translate(${imgXOffset}px, ${headerYOffset}px)`;
            }

            lastWrapperHeight = wrapperHeight;
            lastProgressMidde = progressMiddle;

            return (
              <div
                className={styles.imgWrapper}
                key={image}
                style={{
                  height: `${wrapperHeight}px`,
                }}
              >
                <img alt="" className={styles.img} src={image} style={imgStyle} />
              </div>
            );
          });

          return (
            <div className={styles.root} style={{ paddingTop, paddingBottom }}>
              {imageNodes}
              <Indicator
                className={
                  scrollY > indicatorThreshold ? styles.indicatorAbsolute : styles.indicatorFixed
                }
                current={closestActive + 1}
                total={images.length}
              />
            </div>
          );
        }}
      </STORE.Consumer>
    );
  }
}
