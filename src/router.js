import App from 'App/App';
import { BASE_URL } from './constants';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

const Home = lazy(() => {
  return import('pages/Home/Home');
});
const GalleryScroll = lazy(() => {
  return import('pages/GalleryScroll/GalleryScroll');
});
const GalleryJS = lazy(() => {
  return import('pages/GalleryJS/GalleryJS');
});

export default function Router() {
  return (
    <BrowserRouter basename={BASE_URL}>
      <App>
        <Suspense fallback={<div />}>
          <Switch>
            <Route component={Home} exact path="/" />
            <Route component={GalleryScroll} exact path="/galleryscroll" />
            <Route component={GalleryJS} exact path="/galleryjs" />
          </Switch>
        </Suspense>
      </App>
    </BrowserRouter>
  );
}
