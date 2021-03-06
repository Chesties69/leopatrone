import GalleryScrollProjector from 'components/GalleryScrollProjector/GalleryScrollProjector';

const IMAGES = [
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
].map((image) => {
  return image.default;
});

export default function Weddings() {
  return <GalleryScrollProjector images={IMAGES} />;
}
