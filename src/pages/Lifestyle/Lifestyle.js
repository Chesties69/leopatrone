﻿import React from 'react';
import GalleryScrollProjector from 'components/GalleryScrollProjector/GalleryScrollProjector';

const IMAGES = [
  // require('./imgs/Jenzack0017.jpg'),
  // require('./imgs/Jenzack0082.jpg'),
  // require('./imgs/Jenzack0115.jpg'),
  // require('./imgs/Jenzack0125.jpg'),
  // require('./imgs/Jenzack0175.jpg'),
  // require('./imgs/Jenzack0177.jpg'),
  // require('./imgs/Jenzack0189.jpg'),
  // require('./imgs/Jenzack0191.jpg'),
  // require('./imgs/Jenzack0216.jpg'),
  // require('./imgs/Jenzack0268.jpg'),
  // require('./imgs/Jenzack0272.jpg'),
  // require('./imgs/Jenzack0274.jpg'),
  // require('./imgs/Jenzack0294.jpg'),
  // require('./imgs/Jenzack0297.jpg'),
  // require('./imgs/Jenzack0412.jpg'),
  // require('./imgs/Jenzack0420.jpg'),
  // require('./imgs/Jenzack0424.jpg'),
  // require('./imgs/Jenzack0431.jpg'),
  // require('./imgs/Jenzack0432.jpg'),
  // require('./imgs/Jenzack0500.jpg'),
  // require('./imgs/Jenzack0549.jpg'),
  // require('./imgs/Jenzack0562.jpg'),
  // require('./imgs/Jenzack0563.jpg'),
  // require('./imgs/Jenzack0568.jpg'),
  // require('./imgs/Jenzack0574.jpg'),
  // require('./imgs/Jenzack0612.jpg'),
  // require('./imgs/Jenzack0627.jpg'),
  // require('./imgs/Jenzack0793.jpg'),
  // require('./imgs/Jenzack0795.jpg'), // narrowest aspect ratio 0.75
  // require('./imgs/Jenzack0809.jpg'), // widest aspect ratio 1.33

  require('./imgs/001.jpg'),
  require('./imgs/002.jpg'),
  require('./imgs/003.jpg'),
  require('./imgs/004.jpg'), // narrowest aspect ratio 0.67
  require('./imgs/005.jpg'),
  require('./imgs/006.jpg'),
  require('./imgs/007.jpg'),
  require('./imgs/008.jpg'),
  require('./imgs/009.jpg'),
  require('./imgs/010.jpg'),
  require('./imgs/011.jpg'), // widest aspect ratio 1.49
  require('./imgs/012.jpg'),
];

export default function Lifestyle() {
  return <GalleryScrollProjector images={IMAGES} />;
}
