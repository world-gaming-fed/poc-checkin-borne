import React, { Component, PropTypes } from 'react';
import styles from '../components/Home.css'
export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div>
        <div className={styles.header}>
          <img src="./components/wgf.png" alt="WGF" width="289px" height="90px" />
        </div>
        <div className={styles.under}/>
        <img src="https://placeholdit.imgix.net/~text?&w=650&h=150" alt="WGF" height="100px" width="100%" />
        {this.props.children}
      </div>
    );
  }
}
