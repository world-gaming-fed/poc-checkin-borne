import React, { Component, PropTypes } from 'react';
import { Link, withRouter } from 'react-router';
import _ from 'lodash'
import styles from '../components/Home.css'
import 'whatwg-fetch';
import 'isomorphic-fetch';
import Countdown from 'react-count-down'
import EventContainer from '../components/eventContainer'
import { connect } from 'react-redux';

class CheckIn extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  };
  render () {
    return (
      <div>
        <EventContainer eventId={eventId}>
          {this.props.children}
        </EventContainer>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    eventId: state.event.eventId
  };
}
export default connect(mapStateToProps)(CheckIn)
