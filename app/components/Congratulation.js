import React, { Component } from 'react';
import styles from './Counter.css';
import { Route, IndexRoute, browserHistory,  Redirect,  Link } from 'react-router';
import { createStore } from 'redux'

class Felicitation extends Component {
  static PropTypes = {
    location: React.PropTypes.object
  }

  componentDidMount() {
    setTimeout(function() {
      this.props.history.push('/')
    }.bind(this), 2000)
  }

  render() {
    return (
      <div>
        <div className={styles.container}>
          <br/><br/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Approve_icon.svg" alt="WGF" height="250px" width="250px" />
          <h2>Inscription validée</h2>
        </div>
      </div>
    );
  }
}
export default Felicitation;
