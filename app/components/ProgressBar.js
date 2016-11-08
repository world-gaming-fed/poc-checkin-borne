import React, { Component, PropTypes} from 'react'
import LayStyles from './layout.css'
import { Route, IndexRoute, browserHistory,  Redirect,  Link, withRouter } from 'react-router';
import 'whatwg-fetch';
import 'isomorphic-fetch';
import { connect } from 'react-redux';
import { composeWithPromise } from 'react-komposer';
import _ from 'lodash'
import EventContainer from './eventContainer'
import BorneStyle from './Borne.css'
import { Line, Circle } from 'rc-progress'
import { bindActionCreators } from 'redux';
import { setCapacity } from '../actions/eventAction';
import Progresstyle from './progressBar.css'

class ProgressBar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      counterPercent: 10,
      counter: 0
    }
  }

  updateData() {
    fetch('http://localhost:3001/eventcheckincount/' + this.props.capacity)
    .then(function(response) {
      if (response.status >= 400) {
        throw new Error(response)
       }
      return response.json();
    }.bind(this))
    .then(function(Number_participant) {
      this.setState({counter: Number_participant.number, counterPercent: Number_participant.number * (100 / this.props.capacity)})
      return
    }.bind(this))
    .catch(function(err) {
    })
  }

  componentDidMount () {
    this.updateData()
    this.interval = setInterval(() => {
      this.updateData();
    }, 5000);
  }

  componentWillUnmount () {
    if (this.interval) {
      clearInterval(this.interval);
   }
 }

  render () {
    return (
        <div className={Progresstyle.progress}>
          <p>{this.state.counter} / {this.props.capacity}</p>
          <Line percent={this.state.counterPercent} strokeWidth="3" trailColor="black" trailWidth="3" strokeColor="#DDB726" />
        </div>
      );
    }
  }

function mapStateToProps(state) {
  return {
    eventId: state.event.eventId,
    capacity: state.event.capacity
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setCapacity }, dispatch);
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProgressBar));
