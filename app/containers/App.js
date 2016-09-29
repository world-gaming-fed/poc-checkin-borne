import React, { Component, PropTypes } from 'react';
import { Link, withRouter } from 'react-router';
import styles from '../components/Home.css'
import 'whatwg-fetch';
import 'isomorphic-fetch';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  componentDidMount() {
    fetch('https://www.wgf.gg/api/events/1b778de4-6661-4a8b-9e9f-7af9aa2c62a4')
      .then(function(response) {
          if (response.status >= 400) {
             return null
           }
        return response.json();
      }.bind(this))
     .then(function(tournament) {
          console.log(tournament.name);
   }.bind(this));
 }

  render() {
    return (
      <div>
        <div className={styles.header}>
          <Link to="/">
            <img src="http://icdn.pro/images/fr/m/a/maison-maison-icone-5150-48.png" alt="Home" height="70px" width="70px" />
          </Link>
          <div className={styles.logowgf}>
            <img src="./components/wgf.png" alt="WGF" width="102px" height="32px" />
          </div>
        </div>
        <div className={styles.under}/>
        <img src="https://placeholdit.imgix.net/~text?&w=650&h=150" alt="WGF" height="100px" width="100%" />
        {this.props.children}
      </div>
    );
  }
}
