import React from 'react';
import { Route, IndexRoute, browserHistory,  Redirect } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import QrCode from './components/Qrcode'
import Validation from './components/Validation'
import Felicitation from './components/Congratulation'
import Invalid from './components/invalid'
import Settings from './components/setting'
import Layout from './components/Layout'
import SearchEvent from './components/search'
import HomeBorne from './components/homeBorne'
import Login from './components/login'
import ValidationLogin from './components/ValidLogin'
import InvalidLogin from './components/invalidLogin'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomeBorne}/>
    <Route path="/settings" component={Settings}/>
      <Route path="/search" component={SearchEvent}/>
      <Route path="/login" component={Login}/>
      <Route path="/invalidLogin" component={InvalidLogin}/>
      <Route path="/ValidationLogin/:uuid" component={ValidationLogin}/>
    <Route path="/checkin" component={Layout}>
      <IndexRoute component={HomePage}/>
      <Route path="/QrCode" component={QrCode}/>
      <Route path="/validation/:uuid" component={Validation}/>
      <Route path="/felicitation/:name" component={Felicitation}/>
      <Route path="/invalid" component={Invalid}/>
    </Route>
    <Route path="/setting" component={Settings}/>
    <Route path="/search" component={SearchEvent}/>
  </Route>
);
