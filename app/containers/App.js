import React, { Component, PropTypes } from 'react';
import { Link, withRouter } from 'react-router';
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
    fetch('https://www.wgf.gg/api/tournaments/event/1b778de4-6661-4a8b-9e9f-7af9aa2c62a4')
      .then(function(response) {
          if (response.status >= 400) {
             return null
           }
        return response.json();
      })

     .then(function(tournament) {
          this.setState({
            name: tournament.elements[0].name.fr
          })
      }.bind(this))
}

  render() {
    return (
        <div>
          <div className={styles.header}>
            <Link to="/">
              <img src="http://icdn.pro/images/fr/m/a/maison-maison-icone-5150-48.png" alt="Home" height="45px" width="45px" />
            </Link>
            <div className={styles.logowgf}>
              <img src="./components/wgf.png" alt="WGF" width="102px" height="32px" />
            </div>
          </div>
          <div className={styles.under}>
          </div>
          <div className={styles.stl}>
            <img src="https://placeholdit.imgix.net/~text?&w=650&h=150" alt="WGF" height="100px" width="100%" />
            <div className={styles.imgtournament}>
              <h1>{this.state.name}</h1>
            </div>
          </div>
          {this.props.children}
        </div>
    );
  }
}
