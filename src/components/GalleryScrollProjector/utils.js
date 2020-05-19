import { round } from '@danehansen/math';

export function containRect(srcWidth, srcHeight, containWidth, containHeight) {
  let width;
  let height;
  if (srcWidth / srcHeight > containWidth / containHeight) {
    width = containWidth;
    height = containWidth / (srcWidth / srcHeight);
  } else {
    width = containHeight * (srcWidth / srcHeight);
    height = containHeight;
  }

  if (width !== containWidth && height !== containHeight) {
    throw new Error(`containRect 1: ${srcWidth}, ${srcHeight}, ${containWidth}, ${containHeight}`);
  }
  if (round(width / height, 1000) !== round(srcWidth / srcHeight, 1000)) {
    throw new Error(
      `containRect 2: ${srcWidth}, ${srcHeight}, ${containWidth}, ${containHeight}, ${
        width / height
      }, ${srcWidth / srcHeight}`,
    );
  }
  if (width > containWidth || height > containHeight) {
    throw new Error(`containRect 3: ${srcWidth}, ${srcHeight}, ${containWidth}, ${containHeight}`);
  }

  return { width, height };
}

export function scaleRectToArea(width, height, targetArea) {
  const area = width * height;
  const ratio = Math.sqrt(targetArea / area);
  const newWidth = width * ratio;
  const newHeight = height * ratio;
  const newArea = newWidth * newHeight;

  if (round(newArea, 10) !== round(targetArea, 10)) {
    throw new Error(`scaleRectToArea 1: ${width}, ${height}, ${targetArea}, ${newArea}`);
  }

  return { width: newWidth, height: newHeight };
}
