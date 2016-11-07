import React, { Component } from 'react';
import styles from './Home.css';
import { composeWithPromise } from 'react-komposer';
import _ from 'lodash';
import eventStyle from './eventContainer.css';

const EventHeader = ({event}) => (
  <div className={styles.stl}>
    <div style={{ backgroundImage: 'url('+ 'https://static.wgf.gg/' + _.get(event, 'poster.uri') + '-1024.jpg' +')', height: '100px', backgroundPosition: 'center', backgroundSize: 'cover'}} className={eventStyle.eventImg} />
    <div className={styles.imgtournament}>
      <p>{event.name}</p>
    </div>
  </div>
)

class EventContainer extends Component {
  render () {
    const event = this.props.event
    return (
      <div>
        <EventHeader event={event}/>
        { this.props.children }
      </div>
    );
  }
}

function fetchEvent({eventId}) {
    return fetch('https://www.wgf.gg/api/events/' + eventId)
      .then(function(response) {
          if (response.status >= 400) {
             return null
           }
        return response.json();
      })
     .then(function(event) {
       return {event}
     }.bind(this))
}

export default composeWithPromise(fetchEvent)(EventContainer)
