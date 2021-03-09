import { useState, useEffect } from 'react';

const WIN = typeof window !== 'undefined' ? window : null;

const VIEWPORT_DIMENSIONS_WINDOW = {
  addEventListener() {},
  innerHeight: 0,
  innerWidth: 0,
  removeEventListener() {},
};

export function useViewportDimensions(win = WIN || VIEWPORT_DIMENSIONS_WINDOW) {
  const [innerHeight, setInnerHeight] = useState(win.innerHeight);
  const [innerWidth, setInnerWidth] = useState(win.innerWidth);

  useEffect(() => {
    function onResize() {
      setInnerHeight(win.innerHeight);
      setInnerWidth(win.innerWidth);
    }

    win.addEventListener('resize', onResize);
    return () => {
      win.removeEventListener('resize', onResize);
    };
  }, [win]);

  return [innerWidth, innerHeight];
}

const SCROLL_POSITION_WINDOW = {
  addEventListener() {},
  pageXOffset: 0,
  pageYOffset: 0,
  removeEventListener() {},
};

export function useScrollPosition(win = WIN || SCROLL_POSITION_WINDOW) {
  const [scrollX, setScrollX] = useState(win.pageXOffset);
  const [scrollY, setScrollY] = useState(win.pageYOffset);

  useEffect(() => {
    function onScroll() {
      setScrollX(win.pageXOffset);
      setScrollY(win.pageYOffset);
    }

    win.addEventListener('scroll', onScroll);
    return () => {
      win.removeEventListener('scroll', onScroll);
    };
  }, [win]);

  return [scrollX, scrollY];
}
