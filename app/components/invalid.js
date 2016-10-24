import React, { Component } from 'react';
import styles from './Counter.css';
import hmstyle from './Home.css';
import Btn from './button'
import { Route, IndexRoute, browserHistory,  Redirect,  Link, withRouter } from 'react-router';
import { createStore } from 'redux';
import Qrcode from './Qrcode';
import forme from './circle.css'

class Invalid extends Component {
  static PropTypes = {
    location: React.PropTypes.object,
    router: React.PropTypes.object.isRequired
  }
  constructor(props){
    super(props)
  }

  componentDidMount () {
    this.timer = setTimeout( function() {
      this.props.history.push('/QrCode')
    }.bind(this), 10000);
  }

  componentWillUnmount () {
    clearTimeout(this.timer)
  }

  render () {
    return (
      <div>
        <div className={styles.container}>
          <br/>
          <div className={forme.circRed}>
            <img src="./components/asset/true.svg" alt="wrong" height="133px" width="133px"/>
          </div>
            <br/>
            <br/>
            <a>Vous ne semblez ne pas être inscrit sur la plateforme WGF</a>
        </div>
        <div className={hmstyle.container}>
          <Link to="/Qrcode"><Btn>Réessayez</Btn></Link>
        </div>
    </div>
    );
  }
}
export default withRouter(Invalid);
