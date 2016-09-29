import React, { Component } from 'react';
import styles from './Counter.css';
import { Route, IndexRoute, browserHistory,  Redirect,  Link } from 'react-router';
import QrCode from './Qrcode'
import { createStore } from 'redux'
import Felicitation from './Congratulation'
import Invalid from './invalid'
import 'whatwg-fetch';
import 'isomorphic-fetch';

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
             return this.props.history.push('/invalid')
           }
        return response.json();
      }.bind(this))
     .then(function(player) {
        return this.props.history.push('felicitation/' + player.alias)
   }.bind(this));
 }

  render() {
    return (
      <div>
        <div className={styles.container}>
          <h2>Validation en cours</h2>
          <img src="http://www.total.com/sites/all/themes/custom/total_theme/images/loading.gif" alt="WGF" height="150px" width="150px" />
        </div>
      </div>
    );
  }
}
export default Validation;
