import React, { Component, PropTypes } from 'react';
import styles from './Counter.css';
import hmstyle from './Home.css';
import Search from 'react-search';
import SetStyles from './setting.css'
import Btn from './button'
import _ from 'lodash'
import { Route, IndexRoute, browserHistory,  Redirect,  Link, withRouter } from 'react-router';
import { createStore } from 'redux';
import 'whatwg-fetch';
import 'isomorphic-fetch';
import moment from 'moment';
import qs from 'qs'
import Countdown from 'react-count-down';
import './search'
import LayStyles from './layout.css'

class Settings extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <div className={LayStyles.layout}>
          <Link to="/">
            <i className="fa fa-angle-left" aria-hidden="true"></i>
          </Link>
        </div>
        <div className={SetStyles.setting}>
          <h2> Parametres de tournoi </h2>
          <Link to="/search">
            <img src="http://www.sabletopia.co.uk/wp-content/uploads/2013/09/search-2561.png" alt="Search"/>
          </Link>
        </div>
      </div>
    )
  }
}
export default withRouter(Settings);
