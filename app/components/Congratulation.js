import React, { Component } from 'react';
import styles from './Counter.css';
import { Route, IndexRoute, browserHistory,  Redirect,  Link, withRouter } from 'react-router';
import { createStore } from 'redux'
import hmstyle from './Home.css';
import Btn from './button'
import forme from './circle.css'

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
      this.props.router.push('/checkin')
    }.bind(this), 10000);
  }

  componentWillUnmount () {
    clearTimeout(this.timer)
  }

  render() {
    return (
      <div>
        <div className={styles.container}>
          <br/>
        </div>
        <div className={forme.circGreen} >
          <img src="./components/asset/wrong.svg" alt="congratulation" height="133px" width="133px"/>
        </div>
        <div className={styles.container}>
          <a><br/>{this.props.params.name} <br/> Inscription validée</a>
          <br/><Link to="/checkin"><Btn>OK</Btn></Link>
        </div>
      </div>
    );
  }
}
export default withRouter(Felicitation);
