import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';
import Btn from './button'
import moment from 'moment';
import Countdown from 'react-count-down';
import 'whatwg-fetch';
import 'isomorphic-fetch';

export default class Home extends Component {

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
    fetch('https://www.wgf.gg/api/tournaments/event/1b778de4-6661-4a8b-9e9f-7af9aa2c62a4')
      .then(function(response) {
          if (response.status >= 400) {
             return null
           }
        return response.json();
      })

     .then(function(tournament) {
        var startDate = tournament.elements[0].dates[0].start
        var chrono = moment.utc(startDate).add(2, 'M').add(23, 'd').add(19, 'H').locale('fr');
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
          <Link to="/Qrcode"><Btn>Check in</Btn></Link>
        </div>
        {this.props.children}
      </div>
    );
  }
}
