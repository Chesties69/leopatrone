import React from 'react';
import GalleryJS from 'components/GalleryJS/GalleryJS';

const IMAGES = [
  require('./imgs/001.jpg'),
  require('./imgs/002.jpg'),
  require('./imgs/003.jpg'),
  require('./imgs/004.jpg'),
  require('./imgs/005.jpg'),
  require('./imgs/006.jpg'),
  require('./imgs/007.jpg'),
  require('./imgs/008.jpg'),
  require('./imgs/009.jpg'),
  require('./imgs/010.jpg'),
  require('./imgs/011.jpg'),
  require('./imgs/012.jpg'),
];

export default function Weddings() {
  return <GalleryJS images={IMAGES} />;
}
