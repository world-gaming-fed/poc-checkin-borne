import React, { Component, PropTypes } from 'react';
import styles from './Counter.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import hmstyle from './Home.css';
import Search from 'react-search';
import Btn from './button'
import _ from 'lodash'
import { Route, IndexRoute, browserHistory,  Redirect,  Link, withRouter } from 'react-router';
import { createStore } from 'redux';
import 'whatwg-fetch';
import 'isomorphic-fetch';
import { stock } from '../actions/eventAction'
import moment from 'moment';
import qs from 'qs'
import Countdown from 'react-count-down';
import searchStyle from './react-search.css'

const SearchEvent = React.createClass({
  getInitialState: function () {
    return {events: [] }
  },

  getItemsAsync: function(searchValue, cb) {
    const url = 'http://www.wgf.gg/api/events';
    const query = {
      filter: {
        per_page: 10,
        name: searchValue
      }
    }

    const fetchUrl = url + '?' + qs.stringify(query)
    if (searchValue.length <= 0) {
      return null
    }
    fetch(fetchUrl)
     .then((response) => {
          return response.json();
        })
     .then((results) => {
        if(results.elements != undefined){
          let items = results.elements.map( (item, i) => {return {id: i, value: item.name } })
          this.setState({ events: items, originalEvents: results.elements})
          cb(searchValue)
        }
      })
  },

  onItemsChanged: function(selectedItems) {
    if (selectedItems != '— None') {
      const selectItems = this.state.originalEvents[selectedItems[0].id]
      this.props.stock(selectItems.id)
    }
  },

  onKeyChange: function(item) {
    console.log(item)
  },

  myfunc: function(e) {
      console.log(e.currentTarget.value);
    },

  render: function() {

    return (
      <div>
        <div className={hmstyle.container}>
          <h2>SAISISSEZ LE NOM DE VOTRE TOURNOI</h2>
          <img src="./components/asset/organization.svg" alt="wgf" height="45px" width="45px"></img>
        </div>
        <div className={styles.setting}>
          <Search items={this.state.events}
            getItemsAsync={this.getItemsAsync}
            onKeyChange={this.onKeyChange}
            onItemsChanged={this.onItemsChanged}
            placeholder="Ex: Orange Q1 - UEFA EURO 2016™ Virtual Tournament"
            NotFoundPlaceholder=" "/>
        </div>
        {
          !_.isEmpty(this.props.eventId)?<div className={styles.setting}><Link to="/"><Btn>Valider</Btn></Link></div>:<p> </p>
        }
      </div>
    );
  }
})
function mapStateToProps(state) {
  return {
    eventId: state.event.eventId
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ stock }, dispatch);
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchEvent));
