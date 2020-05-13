// ﻿import React from 'react';
// import styles from './GalleryScrollProjector.module.scss';
// import PropTypes from 'prop-types';
// import ResizeListener from 'components/ResizeListener/ResizeListener';
// import { containRect, scaleRectToArea } from './utils';
//
// class GalleryScrollProjector extends React.Component {
//   static propTypes = {
//     images: PropTypes.arrayOf(PropTypes.string).isRequired,
//   };
//
//   state = {};
//
//   _rootRef;
//
//   componentDidMount() {
//     const {images} = this.props;
//     const promises = [];
//     let minRatio = Number.MAX_VALUE;
//     let maxRatio = 0;
//     for (const image of images) {
//       promises.push(new Promise((fulfill, reject) => {
//         const i = new Image();
//         i.addEventListener('load', ({target: {width, height}}) => {
//           const ratio = width / height;
//           minRatio = Math.min(ratio, minRatio);
//           maxRatio = Math.max(ratio, maxRatio);
//           fulfill({width, height, ratio});
//         })
//         i.src = image;
//       }))
//     }
//     Promise.all(promises)
//     .then((values) => {
//       this.setState({
//         imageDimensions: values,
//         maxAspectRatio: maxRation,
//         minAspectRatio: minRatio,
//       })
//     })
//   }
//
//   componentWillUnmount() {
//     this._rootRef.removeEventListener('scroll', this._onScroll);
//   }
//
//   componentDidUpdate(prevProps, prevState) {
//     const {maxWidth, maxHeight} = this.state;
//     const {innerWidth:prevWidth, innerHeight:prevHeight} = prevProps;
//     const {innerWidth:nextWidth, innerHeight:nextHeight} = this.props;
//
//     if (this._rootRef && ( (prevWidth !== nextWidth || prevHeight !== nextHeight) || (!maxWidth || !maxHeight) )) {
//       this.setState({
//         maxWidth: this._rootRef.offsetWidth,
//         maxHeight: this._rootRef.offsetHeight,
//       });
//     }
//   }
//
//   render() {
//     const { images, innerWidth, innerHeight } = this.props;
//     const { imageDimensions, scrollTop, maxAspectRatio, minAspectRatio } = this.state;
//     const aspectRatioHolder = innerWidth / innerHeight;
//
//     let rootWidth;
//     let rootHeight;
//     let minSurfaceArea;
//     let maxSurfaceArea;
//     if (this._rootRef) {
//       rootWidth = this._rootRef.offsetWidth;
//       rootHeight = this._rootRef.offsetHeight;
//
//       if(aspectRatioHolder > minAspectRatio) {
//         minSurfaceArea =
//       } else {
//
//       }
//     }
//
//     console.log(rootWidth, rootHeight, aspectRatioHolder)
//
//     return (
//       <div
//         className={styles.root}
//         ref={(node) => {
//           if (node && this._rootRef !== node) {
//             if (this._rootRef) {
//               this._rootRef.removeEventListener('scroll', this._onScroll);
//             }
//             this._rootRef = node;
//             this._rootRef.addEventListener('scroll', this._onScroll);
//             this._onScroll();
//           }
//         }}
//       >
//         {images.map(function (image, index) {
//           if (!imageDimensions) {
//             return;
//           }
//
//           const aspectRatioImage = imageDimensions[index].width / imageDimensions[index].height;
//           let style;
//
//           console.log(aspectRatioHolder, aspectRatioImage)
//           if (aspectRatioHolder > aspectRatioImage) {
//             style = {
//               width: `${200}px`,
//             }
//           } else {
//             style = {
//               height: `${200}px`,
//             }
//           }
//
//           return <div className={styles.holder} key={image}>
//           <img alt="" className={styles.img} src={image} style={style} />
//           </div>;
//         })}
//       </div>
//     );
//   }
//
//   _onScroll = () => {
//     const { scrollTop: scrollTopState } = this.state;
//     const { scrollTop: scrollTopRef } = this._rootRef;
//     if (scrollTopState !== scrollTopRef) {
//       this.setState({ scrollTop: scrollTopRef });
//     }
//   };
// }
//
// export default function (props) {
//   return (
//     <ResizeListener>
//       {function (innerWidth, innerHeight) {
//         return (
//           <GalleryScrollProjector innerWidth={innerWidth} innerHeight={innerHeight} {...props} />
//         );
//       }}
//     </ResizeListener>
//   );
// }
