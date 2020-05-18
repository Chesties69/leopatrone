import React from 'react';

export const BASE_URL = '/leopatrone/';
export const LEO_EMAIL = 'leo@leopatrone.com';
export const LEO_PHONE = '801-360-7786';
export const TODAY = new Date();
export const YEAR = TODAY.getFullYear();
export const ROUTE_HOME = '/';
export const ROUTE_WEDDINGS = '/weddings';
export const ROUTE_LIFESTYLE = '/lifestyle';
export const ROUTE_PORTRAITS = '/portraits';
export const ROUTE_ABOUT = '/about';
export const ROUTE_CONTACT = '/contact';
export const STORE = React.createContext({
  innerHeight: 69,
  innerWidth: 420,
  scrollY: 12345,
});
