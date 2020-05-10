import App from 'App/App';
import { BASE_URL } from 'utils/constants';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

const Home = lazy(() => {
  return import('pages/Home/Home');
});
const Weddings = lazy(() => {
  return import('pages/Weddings/Weddings');
});
const Lifestyle = lazy(() => {
  return import('pages/Lifestyle/Lifestyle');
});
const Portraits = lazy(() => {
  return import('pages/Portraits/Portraits');
});
const About = lazy(() => {
  return import('pages/About/About');
});
const Contact = lazy(() => {
  return import('pages/Contact/Contact');
});

export default function Router() {
  return (
    <BrowserRouter basename={BASE_URL}>
      <App>
        <Suspense fallback={<div />}>
          <Switch>
            <Route component={Home} exact path="/" />
            <Route component={Weddings} exact path="/weddings" />
            <Route component={Lifestyle} exact path="/lifestyle" />
            <Route component={Portraits} exact path="/portraits" />
            <Route component={About} exact path="/about" />
            <Route component={Contact} exact path="/contact" />
          </Switch>
        </Suspense>
      </App>
    </BrowserRouter>
  );
}
