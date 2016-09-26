import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';
import Btn from './button'

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <h2>Bienvenue sur la borne d'inscription</h2>
          <Link to="/Qrcode"><Btn>Check in</Btn></Link>
        </div>
        {this.props.children}
      </div>
    );
  }
}
