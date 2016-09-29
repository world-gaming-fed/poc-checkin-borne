import React, { Component } from 'react';
import styles from './Counter.css';
import { Route, IndexRoute, browserHistory,  Redirect,  Link } from 'react-router';
import { createStore } from 'redux'
import hmstyle from './Home.css';
import Btn from './button'

class Felicitation extends Component {
  static PropTypes = {
    location: React.PropTypes.object,
    router: React.PropTypes.object.isRequired
  }
  constructor(props){
    super(props)
  }

  componentDidMount () {
    this.timer = setTimeout( function() {
      this.props.history.push('/')
    }.bind(this), 10000);
  }

  componentWillUnmount () {
    clearTimeout(this.timer)
  }

  render() {
    return (
      <div>
        <div className={styles.backButton}>
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div className={styles.container}>
          <br/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Approve_icon.svg" alt="WGF" height="150px" width="150px" />
        </div>
        <div className={styles.container}>
          <a>{this.props.params.name} <br/>Inscription validée</a>
          <div className={hmstyle.container}>
            <Link to="/"><Btn>Ok</Btn></Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Felicitation;
