import React, { Component } from 'react';
import styles from './Counter.css';
import { Route, IndexRoute, browserHistory,  Redirect,  Link, withRouter } from 'react-router';
import QrCode from './Qrcode'
import { createStore } from 'redux';

import Invalid from './invalid';
import 'whatwg-fetch';
import 'isomorphic-fetch';
import forme from './circle.css';

class ValidationLogin extends Component {
  static PropTypes = {
    location: React.PropTypes.object,
     router: React.PropTypes.object.isRequired
  }
  constructor(props){
    super(props)
  }

  componentDidMount() {
     if (this.props.params.uuid == "e18db8d4-75d7-11e6-8b77-86f30ca893d3") {
       console.log(this.props.params.uuid)
       this.props.router.push('/')
     }
     else {
       this.props.router.push('/invalidLogin')
     }
 }

  render() {
    return (
      <div className={styles.container}>
        <h2>Validation en cours</h2>
        <div className={forme.circYellow}>
          <img src="./components/asset/loading.svg" alt="qrcode" height="133px" width="133px"/>
        </div>
      </div>
    );
  }
}
export default withRouter(ValidationLogin);
