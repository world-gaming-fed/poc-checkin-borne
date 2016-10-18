import React, { Component, PropTypes } from 'react';
import { Link, withRouter } from 'react-router';
import _ from 'lodash'
import styles from '../components/Home.css'
import 'whatwg-fetch';
import 'isomorphic-fetch';
import Countdown from 'react-count-down'

class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  constructor(props){
    super(props)
    this.state = {
      name: null
    }
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
            <div className={styles.logowgf}>
              <img src="./components/asset/wgf.png" alt="WGF" width="200px" height="55px" />
            </div>
            <div className={styles.setting}>
              <Link to="/setting">
                <i className="fa fa-cog" ></i>
              </Link>
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
export default withRouter(App);
