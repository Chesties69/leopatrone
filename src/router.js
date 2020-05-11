import App from 'App/App';
import {
  BASE_URL,
  ROUTE_HOME,
  ROUTE_WEDDINGS,
  ROUTE_LIFESTYLE,
  ROUTE_PORTRAITS,
  ROUTE_ABOUT,
  ROUTE_CONTACT,
} from 'utils/constants';
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
            <Route component={Home} exact path={ROUTE_HOME} />
            <Route component={Weddings} exact path={ROUTE_WEDDINGS} />
            <Route component={Lifestyle} exact path={ROUTE_LIFESTYLE} />
            <Route component={Portraits} exact path={ROUTE_PORTRAITS} />
            <Route component={About} exact path={ROUTE_ABOUT} />
            <Route component={Contact} exact path={ROUTE_CONTACT} />
          </Switch>
        </Suspense>
      </App>
    </BrowserRouter>
  );
}
