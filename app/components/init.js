import React, { Component, PropTypes } from 'react';
import { Link, withRouter } from 'react-router';
import _ from 'lodash'
import styles from './Home.css'
import 'whatwg-fetch';
import 'isomorphic-fetch';
import Countdown from 'react-count-down'

class Init extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  constructor(props){
    super(props)
  }

  render () {
    return (
      <div>
        <div className={styles.header}>
          <div className={styles.logowgf}>
            <img src="./components/asset/wgf.png" alt="WGF" width="200px" height="55px" />
          </div>
        </div>
        <div className={styles.under}/>
        <Link to="/app"><h2>rrrrrr</h2></Link>
      </div>
    )
  }

}
export default Init;
