import React, { Component } from 'react';
import { Link } from 'react-router';
import but from './button.css'
import { connect } from 'react-redux';
import _ from 'lodash'
import ButtonDisabled from './buttonDisable'
import Btn from './button'

class ButtonControl extends Component {
  render() {
    return (
        _.isEmpty(this.props.eventId) ? <ButtonDisabled>CHECK-IN</ButtonDisabled> : <Link to="/Qrcode"><Btn>CHECK-IN</Btn></Link>
    );
  }
}
function mapStateToProps(state) {
  return {
    eventId: state.event.eventId
  };
}
export default connect(mapStateToProps)(ButtonControl);
