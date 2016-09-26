import React, { Component } from 'react';
import styles from './Counter.css';
import { Route, IndexRoute, browserHistory,  Redirect,  Link } from 'react-router';
import QrCode from './Qrcode'
import { createStore } from 'redux'
import Felicitation from './Congratulation'
import 'whatwg-fetch';
import 'isomorphic-fetch';

class Validation extends Component {
  static PropTypes = {
    location: React.PropTypes.object
  }
  constructor(props){
    super(props)
    this.state = {
      name: null,
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/players/' +  this.props.params.uuid)
    .then(function(response) {
     if (response.status >= 400) {
         console.log("Bad response from server");
     }
      console.log(response.status);
     return response.json();
   })
   .then(function(stories) {
       console.log(stories);
   });

    /*setTimeout(function() {
      console.log(this.props.history.push('/Felicitation'))
    }.bind(this), 3000)*/
  }
  delta() {
      this.setState({
          name : this.props.componentDidMount.stories.alias
      });
  }

  render() {
    console.log(this.props.params.uuid)
    console.log(this.state.name)
    return (
      <div>
        <div className={styles.container}>
          <h2>Validation en cours</h2>
          <img src="http://www.total.com/sites/all/themes/custom/total_theme/images/loading.gif" alt="WGF" height="150px" width="150px" />
          <br /><br /><p>UUID PLAYER</p>
          <p>{this.props.params.uuid}</p>
        </div>
      </div>
    );
  }
}
export default Validation;
