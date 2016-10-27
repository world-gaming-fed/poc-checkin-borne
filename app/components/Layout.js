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

class Layout extends Component {
  render () {
    const eventId = this.props.eventId
    if (_.isEmpty(this.props.eventId)) {
    this.props.router.push('/')
    }
    return (
        <div>
          <div className={LayStyles.layout}>
            <Link to="/checkin">
              <i className="fa fa-angle-left" aria-hidden="true"></i>
            </Link>
          </div>
          <div className={BorneStyle.homeHide}>
            <Link to="/login">
              <i className="fa fa-cog" ></i>
            </Link>
          </div>
          <EventContainer eventId={eventId}>
            {this.props.children}
          </EventContainer>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    eventId: state.event.eventId
  };
}
export default withRouter(connect(mapStateToProps)(Layout));
