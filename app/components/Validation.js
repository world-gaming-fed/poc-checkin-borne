import React, { Component } from 'react';
import styles from './Counter.css';
import { Route, IndexRoute, browserHistory,  Redirect,  Link, withRouter } from 'react-router';
import QrCode from './Qrcode'
import { createStore } from 'redux';
import Felicitation from './Congratulation';
import Invalid from './invalid';
import 'whatwg-fetch';
import 'isomorphic-fetch';
import forme from './circle.css';

class Validation extends Component {
  static PropTypes = {
    location: React.PropTypes.object,
     router: React.PropTypes.object.isRequired
  }
  constructor(props){
    super(props)
  }

  componentDidMount() {
    fetch('http://localhost:3001/players/' +  this.props.params.uuid)
      .then(function(response) {
        if (response.status >= 400) {
          this.props.router.push('/invalid')
          throw new Error(response)
         }
        return response.json();
      }.bind(this))
      .then(function(player) {
        console.log(player.alias)
        return this.props.router.push('felicitation/' + player.alias)
      }.bind(this))
      .catch(function(err) {
        console.log(err)
      })
    ;
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
export default withRouter(Validation);
