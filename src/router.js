import App from 'App/App';
import { BASE_URL } from './constants';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

const Home = lazy(() => {
  return import('pages/Home/Home');
});
const Gallery = lazy(() => {
  return import('pages/Gallery/Gallery');
});

export default function Router() {
  return (
    <BrowserRouter basename={BASE_URL}>
      <App>
        <Suspense fallback={<div />}>
          <Switch>
            <Route component={Home} exact path="/" />
            <Route component={Gallery} exact path="/gallery" />
          </Switch>
        </Suspense>
      </App>
    </BrowserRouter>
  );
}
