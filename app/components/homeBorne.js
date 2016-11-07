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
import BorneStyle from './Borne.css'

 class HomeBorne extends Component {

  constructor(props)  {
    super(props)
  this.state = {
  name: null
  }
}

componentDidMount() {
  if (!_.isEmpty(this.props.eventId)) {
  fetch('https://www.wgf.gg/api/events/' + this.props.eventId)
    .then(function(response) {
        if (response.status >= 400) {
           return null
         }
      return response.json();
    })

   .then(function(tournament) {
        this.setState({
          name: tournament.name
        })
       }.bind(this))
  }
  else {
    return null
  }
}

  emptyError() {
    return (
      <div>
        <div className={styles.container}>
          <h2>Bienvenue sur la Borne</h2> <br/>
          <Link to="/setting">
            <a>
              <div className={BorneStyle.bord}>
                <p> Veuillez configurer votre tournoi ici</p>
              </div>
            </a>
          </Link>
        </div>
      </div>
      );
  }

  render () {
    if (_.isEmpty(this.props.eventId)) {
      return this.emptyError()
    }
    else {
      return (
        <div>
          <div className={BorneStyle.setting}>
            <Link to="/setting">
              <i className="fa fa-cog" ></i>
            </Link>
          </div>
          <div className={styles.container}>
            <h2>Bienvenue sur la Borne</h2> <br/>
          </div>
            <div className={styles.container}>
            <h3>Tournoi sélectionné: {this.state.name}</h3>
          </div>
          <div className={styles.container}>
            <p>Choisissez un mode</p>
          </div>
          <div className={BorneStyle.img}>
            <Link to="/checkin"><img src="http://www.adn-formationprevention.fr/wp-content/uploads/2014/05/Edit_Property.png" alt="checkin" width="100px" height="100px"/></Link>
          </div>
          {this.props.children}
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    eventId: state.event.eventId
  };
}
export default withRouter(connect(mapStateToProps)(HomeBorne));
