import React, { Component, PropTypes } from 'react';
import { Link, withRouter } from 'react-router';
import _ from 'lodash'
import styles from '../components/Home.css'
import 'whatwg-fetch';
import 'isomorphic-fetch';
import moment from 'moment';
import Countdown from 'react-count-down'

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  constructor(props){
    super(props)
    this.state = {
      name: null
    }
  }

  componentDidMount() {
    fetch('https://www.wgf.gg/api/events/1b778de4-6661-4a8b-9e9f-7af9aa2c62a4')
      .then(function(response) {
          if (response.status >= 400) {
             return null
           }
        return response.json();
      })
     .then(function(event) {
        this.setState({
          event: event
        })
      }.bind(this))
  }

  renderTop (event) {
    if (!event) {
      return null
    }

    const url = 'https://static.wgf.gg/' + _.get(event, 'poster.uri') + '-1024.jpg'
    console.log(url)
    return (
        <div className={styles.stl}>
          <div style={{ backgroundImage: 'url('+ url +')', height: '100px', backgroundPosition: 'center', backgroundSize: 'cover'}} />
          <div className={styles.imgtournament}>
            <p>{_.get(event, 'name')}</p>
            </div>
        </div>
      );
  }

  render() {
    const event = this.state.event;

    return (
        <div>
          <div className={styles.header}>
            <Link to="/">
              <i className="fa fa-angle-left" aria-hidden="true"></i>
            </Link>
            <div className={styles.logowgf}>
              <img src="./components/asset/wgf.png" alt="WGF" width="200px" height="55px" />
            </div>
          </div>
          <div className={styles.under}>
          </div>
          {this.renderTop(event)}
          {this.props.children}
        </div>
    );
  }
}
