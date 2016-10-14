import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';
import styles from './Home.css';
import _ from 'lodash'
import Btn from './button'
import moment from 'moment';
import Countdown from 'react-count-down';
import 'whatwg-fetch';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import 'isomorphic-fetch';
import ButtonDisabled from './buttonDisable'
import ButtonControl from './buttonControl'

 class Home extends Component {

  constructor(props){
    super(props)
    this.state = {
      name: null,
      start: null,
      chrono: null,
      hours: null
    }
  }

  componentDidMount() {
    if (!_.isEmpty(this.props.eventId)) {
    fetch('https://www.wgf.gg/api/tournaments/event/' + this.props.eventId)
      .then(function(response) {
          if (response.status >= 400) {
             return null
           }
        return response.json();
      })

     .then(function(tournament) {
        var startDate = tournament.elements[0].dates[0].start
        var chrono = moment.utc(startDate).locale('fr');
          this.setState({
            name: tournament.elements[0].name.fr,
            start: startDate,
            utcDate: chrono
          })
          this.timer = setInterval(function(){
            var date = this.state.utcDate
            var compt = date.add(1, 'm')
            this.setState({
             hours: compt.toNow()
           })
         }.bind(this), 100);
      }.bind(this))
    }
    else {
      this.props.router.push('/setting')
    }
 }

 componentWillUnmount () {
     clearTimeout(this.timer)
   }

  render() {
    return (
      <div>
        <div className={styles.container}>
          <h2>Bienvenue sur la borne d'inscription </h2>
          <img src="http://www.icone-png.com/png/0/94.png" height="45px" width="45px"/>
          <p>Fin du check-in {this.state.hours}</p>
          <ButtonControl/>
        </div>
        {this.props.children}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    eventId: state.event.eventId
  };
}
export default withRouter(connect(mapStateToProps)(Home));
