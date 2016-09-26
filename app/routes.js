import React from 'react';
import { Route, IndexRoute, browserHistory,  Redirect } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import QrCode from './components/Qrcode'
import Validation from './components/Validation'
import Felicitation from './components/Congratulation'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/QrCode" component={QrCode} />
    <Route path="/validation/:uuid" component={Validation} />
    <Route path="Felicitation" component={Felicitation} />
  </Route>
);
